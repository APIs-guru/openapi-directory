import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicenseActivationsPostRegisterEdtLiteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dealerDbModelsEdtLiteRegistration?: shared.DealerDbModelsEdtLiteRegistration;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsEdtLiteRegistration1?: shared.DealerDbModelsEdtLiteRegistration;

  @Metadata({ data: "request, media_type=text/json" })
  dealerDbModelsEdtLiteRegistration2?: shared.DealerDbModelsEdtLiteRegistration;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPostRegisterEdtLiteRequest extends SpeakeasyBase {
  @Metadata()
  request: LicenseActivationsPostRegisterEdtLiteRequests;
}


export class LicenseActivationsPostRegisterEdtLiteResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  licenseActivationsPostRegisterEdtLite200ApplicationJsonBoolean?: boolean;

  @Metadata()
  licenseActivationsPostRegisterEdtLite200TextJsonBoolean?: boolean;

  @Metadata()
  statusCode: number;
}
