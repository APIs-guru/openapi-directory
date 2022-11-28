import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingGetSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingGetSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingGetSubscriptionsQueryParams;
}


export class ReportingGetSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
