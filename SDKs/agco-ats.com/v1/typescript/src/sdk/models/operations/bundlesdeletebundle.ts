import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BundlesDeleteBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class BundlesDeleteBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BundlesDeleteBundlePathParams;
}


export class BundlesDeleteBundleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
