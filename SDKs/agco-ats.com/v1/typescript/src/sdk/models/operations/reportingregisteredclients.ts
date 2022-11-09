import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingRegisteredClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LastCheckInAfter" })
  lastCheckInAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LastCheckInBefore" })
  lastCheckInBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OrderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReportResult" })
  reportResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReportResultIsValid" })
  reportResultIsValid?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReportValue" })
  reportValue?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingRegisteredClientsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingRegisteredClientsQueryParams;
}


export class ReportingRegisteredClientsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata?: shared.ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
