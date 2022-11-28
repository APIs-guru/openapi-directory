import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LicensesGetStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    All = "All"
}


export class LicensesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DealerCode" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: LicensesGetStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" })
  voucherCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class LicensesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LicensesGetQueryParams;
}


export class LicensesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsLicense?: shared.ApiPagedResponseDealerDbModelsLicense;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
