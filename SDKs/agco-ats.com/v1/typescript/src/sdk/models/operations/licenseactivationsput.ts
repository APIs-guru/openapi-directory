import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicenseActivationsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class LicenseActivationsPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationUpdate?: shared.DealerDbModelsLicenseActivationUpdate;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationUpdate1?: shared.DealerDbModelsLicenseActivationUpdate;

  @Metadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationUpdate2?: shared.DealerDbModelsLicenseActivationUpdate;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LicenseActivationsPutPathParams;

  @Metadata()
  request: LicenseActivationsPutRequests;
}


export class LicenseActivationsPutResponse extends SpeakeasyBase {
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
