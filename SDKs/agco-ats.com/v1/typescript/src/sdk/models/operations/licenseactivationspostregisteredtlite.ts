import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseActivationsPostRegisterEdtLiteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dealerDbModelsEdtLiteRegistration?: shared.DealerDbModelsEdtLiteRegistration;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsEdtLiteRegistration1?: shared.DealerDbModelsEdtLiteRegistration;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  dealerDbModelsEdtLiteRegistration2?: shared.DealerDbModelsEdtLiteRegistration;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPostRegisterEdtLiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: LicenseActivationsPostRegisterEdtLiteRequests;
}


export class LicenseActivationsPostRegisterEdtLiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseActivationsPostRegisterEdtLite200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  licenseActivationsPostRegisterEdtLite200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  statusCode: number;
}
