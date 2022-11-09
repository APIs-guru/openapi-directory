import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VouchersPostRequests extends SpeakeasyBase {
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


export class VouchersPostRequest extends SpeakeasyBase {
  @Metadata()
  request: VouchersPostRequests;
}


export class VouchersPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vouchersPost200ApplicationJsonString?: string;

  @Metadata()
  vouchersPost200ApplicationXmlString?: string;

  @Metadata()
  vouchersPost200TextJsonString?: string;

  @Metadata()
  vouchersPost200TextXmlString?: string;
}
