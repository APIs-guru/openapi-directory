import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV2VouchersVoucherCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}

export enum GetApiV2VouchersVoucherCodeDeletedEnum {
    NotDeleted = "NotDeleted",
    Deleted = "Deleted",
    All = "All"
}


export class GetApiV2VouchersVoucherCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deleted" })
  deleted?: GetApiV2VouchersVoucherCodeDeletedEnum;
}


export class GetApiV2VouchersVoucherCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV2VouchersVoucherCodePathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV2VouchersVoucherCodeQueryParams;
}


export class GetApiV2VouchersVoucherCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;

  @SpeakeasyMetadata()
  statusCode: number;
}
