import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseActivationsPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationCreate?: shared.DealerDbModelsLicenseActivationCreate;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationCreate1?: shared.DealerDbModelsLicenseActivationCreate;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationCreate2?: shared.DealerDbModelsLicenseActivationCreate;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: LicenseActivationsPostRequests;
}


export class LicenseActivationsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealerDbModelsLicenseActivation?: shared.DealerDbModelsLicenseActivation;

  @SpeakeasyMetadata()
  statusCode: number;
}
