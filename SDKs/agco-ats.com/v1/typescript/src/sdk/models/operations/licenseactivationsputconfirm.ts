import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseActivationsPutConfirmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class LicenseActivationsPutConfirmRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationConfirm?: shared.DealerDbModelsLicenseActivationConfirm;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationConfirm1?: shared.DealerDbModelsLicenseActivationConfirm;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationConfirm2?: shared.DealerDbModelsLicenseActivationConfirm;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPutConfirmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LicenseActivationsPutConfirmPathParams;

  @SpeakeasyMetadata()
  request: LicenseActivationsPutConfirmRequests;
}


export class LicenseActivationsPutConfirmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
