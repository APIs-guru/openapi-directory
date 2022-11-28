import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesPostPackageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackage1?: shared.UpdateSystemModelsPackage;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackage2?: shared.UpdateSystemModelsPackage;
}


export class PackagesPostPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PackagesPostPackageRequests;
}


export class PackagesPostPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  packagesPostPackage200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  packagesPostPackage200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  packagesPostPackage200TextJsonString?: string;

  @SpeakeasyMetadata()
  packagesPostPackage200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
