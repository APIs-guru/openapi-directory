import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BundlesPutBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class BundlesPutBundleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsBundle?: shared.UpdateSystemModelsBundle;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsBundle1?: shared.UpdateSystemModelsBundle;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsBundle2?: shared.UpdateSystemModelsBundle;
}


export class BundlesPutBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BundlesPutBundlePathParams;

  @Metadata()
  request: BundlesPutBundleRequests;
}


export class BundlesPutBundleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
