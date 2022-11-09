import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicenseActivationsPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationCreate?: shared.DealerDbModelsLicenseActivationCreate;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationCreate1?: shared.DealerDbModelsLicenseActivationCreate;

  @Metadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationCreate2?: shared.DealerDbModelsLicenseActivationCreate;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPostRequest extends SpeakeasyBase {
  @Metadata()
  request: LicenseActivationsPostRequests;
}


export class LicenseActivationsPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dealerDbModelsLicenseActivation?: shared.DealerDbModelsLicenseActivation;

  @Metadata()
  statusCode: number;
}
