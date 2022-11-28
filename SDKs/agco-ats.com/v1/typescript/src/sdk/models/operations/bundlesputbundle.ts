import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BundlesPutBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class BundlesPutBundleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsBundle?: shared.UpdateSystemModelsBundle;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsBundle1?: shared.UpdateSystemModelsBundle;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsBundle2?: shared.UpdateSystemModelsBundle;
}


export class BundlesPutBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BundlesPutBundlePathParams;

  @SpeakeasyMetadata()
  request: BundlesPutBundleRequests;
}


export class BundlesPutBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
