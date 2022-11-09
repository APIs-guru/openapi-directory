import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VouchersPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsVoucher1?: shared.DealerDbModelsVoucher;

  @Metadata({ data: "request, media_type=text/json" })
  dealerDbModelsVoucher2?: shared.DealerDbModelsVoucher;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class VouchersPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VouchersPutPathParams;

  @Metadata()
  request: VouchersPutRequests;
}


export class VouchersPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
