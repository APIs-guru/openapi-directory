import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesPutPackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackagesPutPackageRequests extends SpeakeasyBase {
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


export class PackagesPutPackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesPutPackagePathParams;

  @Metadata()
  request: PackagesPutPackageRequests;
}


export class PackagesPutPackageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
