import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseActivationsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class LicenseActivationsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationUpdate?: shared.DealerDbModelsLicenseActivationUpdate;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationUpdate1?: shared.DealerDbModelsLicenseActivationUpdate;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationUpdate2?: shared.DealerDbModelsLicenseActivationUpdate;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LicenseActivationsPutPathParams;

  @SpeakeasyMetadata()
  request: LicenseActivationsPutRequests;
}


export class LicenseActivationsPutResponse extends SpeakeasyBase {
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
