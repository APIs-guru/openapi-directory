import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2VouchersVoucherCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}

export enum GetApiV2VouchersVoucherCodeDeletedEnum {
    NotDeleted = "NotDeleted"
,    Deleted = "Deleted"
,    All = "All"
}


export class GetApiV2VouchersVoucherCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Deleted" })
  deleted?: GetApiV2VouchersVoucherCodeDeletedEnum;
}


export class GetApiV2VouchersVoucherCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2VouchersVoucherCodePathParams;

  @Metadata()
  queryParams: GetApiV2VouchersVoucherCodeQueryParams;
}


export class GetApiV2VouchersVoucherCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;

  @Metadata()
  statusCode: number;
}
