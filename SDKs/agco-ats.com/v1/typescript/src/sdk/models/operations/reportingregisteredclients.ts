import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingRegisteredClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LastCheckInAfter" })
  lastCheckInAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LastCheckInBefore" })
  lastCheckInBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportResult" })
  reportResult?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportResultIsValid" })
  reportResultIsValid?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportValue" })
  reportValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingRegisteredClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingRegisteredClientsQueryParams;
}


export class ReportingRegisteredClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata?: shared.ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
