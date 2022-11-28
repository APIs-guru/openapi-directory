import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageTypetoBundlesPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackageTypeIDtoBundle?: shared.UpdateSystemModelsPackageTypeIDtoBundle;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackageTypeIDtoBundle1?: shared.UpdateSystemModelsPackageTypeIDtoBundle;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackageTypeIDtoBundle2?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
}


export class PackageTypetoBundlesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PackageTypetoBundlesPostRequests;
}


export class PackageTypetoBundlesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
