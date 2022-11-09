import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PriorityPackagesGetPriorityPackagesStatusEnum {
    Active = "Active"
,    Completed = "Completed"
,    All = "All"
}


export class PriorityPackagesGetPriorityPackagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: PriorityPackagesGetPriorityPackagesStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PriorityPackagesGetPriorityPackagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PriorityPackagesGetPriorityPackagesQueryParams;
}


export class PriorityPackagesGetPriorityPackagesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsPriorityPackage?: shared.ApiPagedResponseUpdateSystemModelsPriorityPackage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
