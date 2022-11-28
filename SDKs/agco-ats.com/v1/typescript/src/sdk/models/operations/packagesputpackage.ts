import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesPutPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackagesPutPackageRequests extends SpeakeasyBase {
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


export class PackagesPutPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesPutPackagePathParams;

  @SpeakeasyMetadata()
  request: PackagesPutPackageRequests;
}


export class PackagesPutPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
