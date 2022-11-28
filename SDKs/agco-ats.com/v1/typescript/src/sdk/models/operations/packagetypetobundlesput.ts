import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageTypetoBundlesPutRequests extends SpeakeasyBase {
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


export class PackageTypetoBundlesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PackageTypetoBundlesPutRequests;
}


export class PackageTypetoBundlesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
