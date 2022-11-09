import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LicenseActivationsPutConfirmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class LicenseActivationsPutConfirmRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dealerDbModelsLicenseActivationConfirm?: shared.DealerDbModelsLicenseActivationConfirm;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dealerDbModelsLicenseActivationConfirm1?: shared.DealerDbModelsLicenseActivationConfirm;

  @Metadata({ data: "request, media_type=text/json" })
  dealerDbModelsLicenseActivationConfirm2?: shared.DealerDbModelsLicenseActivationConfirm;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LicenseActivationsPutConfirmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LicenseActivationsPutConfirmPathParams;

  @Metadata()
  request: LicenseActivationsPutConfirmRequests;
}


export class LicenseActivationsPutConfirmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
