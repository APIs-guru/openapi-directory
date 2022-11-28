import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PriorityPackagesGetPriorityPackagesStatusEnum {
    Active = "Active",
    Completed = "Completed",
    All = "All"
}


export class PriorityPackagesGetPriorityPackagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: PriorityPackagesGetPriorityPackagesStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PriorityPackagesGetPriorityPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PriorityPackagesGetPriorityPackagesQueryParams;
}


export class PriorityPackagesGetPriorityPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsPriorityPackage?: shared.ApiPagedResponseUpdateSystemModelsPriorityPackage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
