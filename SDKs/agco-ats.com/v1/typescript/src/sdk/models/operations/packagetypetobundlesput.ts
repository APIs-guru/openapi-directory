import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageTypetoBundlesPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsPackageTypeIDtoBundle?: shared.UpdateSystemModelsPackageTypeIDtoBundle;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsPackageTypeIDtoBundle1?: shared.UpdateSystemModelsPackageTypeIDtoBundle;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsPackageTypeIDtoBundle2?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
}


export class PackageTypetoBundlesPutRequest extends SpeakeasyBase {
  @Metadata()
  request: PackageTypetoBundlesPutRequests;
}


export class PackageTypetoBundlesPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
