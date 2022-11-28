import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VouchersPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsVoucher1?: shared.DealerDbModelsVoucher;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  dealerDbModelsVoucher2?: shared.DealerDbModelsVoucher;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class VouchersPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VouchersPutPathParams;

  @SpeakeasyMetadata()
  request: VouchersPutRequests;
}


export class VouchersPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
