import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesPostPackageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackage1?: shared.UpdateSystemModelsPackage;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackage2?: shared.UpdateSystemModelsPackage;
}


export class PackagesPostPackageRequest extends SpeakeasyBase {
  @Metadata()
  request: PackagesPostPackageRequests;
}


export class PackagesPostPackageResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  packagesPostPackage200ApplicationJsonString?: string;

  @Metadata()
  packagesPostPackage200ApplicationXmlString?: string;

  @Metadata()
  packagesPostPackage200TextJsonString?: string;

  @Metadata()
  packagesPostPackage200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
