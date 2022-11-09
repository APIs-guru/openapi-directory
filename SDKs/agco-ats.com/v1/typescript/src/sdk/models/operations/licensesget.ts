import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LicensesGetStatusEnum {
    Active = "Active"
,    Inactive = "Inactive"
,    All = "All"
}


export class LicensesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DealerCode" })
  dealerCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: LicensesGetStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" })
  voucherCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class LicensesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LicensesGetQueryParams;
}


export class LicensesGetResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseDealerDbModelsLicense?: shared.ApiPagedResponseDealerDbModelsLicense;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
