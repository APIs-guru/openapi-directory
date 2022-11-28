import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BundlesPostBundleRequests extends SpeakeasyBase {
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


export class BundlesPostBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: BundlesPostBundleRequests;
}


export class BundlesPostBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  bundlesPostBundle200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  bundlesPostBundle200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  bundlesPostBundle200TextJsonString?: string;

  @SpeakeasyMetadata()
  bundlesPostBundle200TextXmlString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
