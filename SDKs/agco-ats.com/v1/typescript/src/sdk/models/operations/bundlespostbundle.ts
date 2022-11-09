import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BundlesPostBundleRequests extends SpeakeasyBase {
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


export class BundlesPostBundleRequest extends SpeakeasyBase {
  @Metadata()
  request: BundlesPostBundleRequests;
}


export class BundlesPostBundleResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  bundlesPostBundle200ApplicationJsonString?: string;

  @Metadata()
  bundlesPostBundle200ApplicationXmlString?: string;

  @Metadata()
  bundlesPostBundle200TextJsonString?: string;

  @Metadata()
  bundlesPostBundle200TextXmlString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
