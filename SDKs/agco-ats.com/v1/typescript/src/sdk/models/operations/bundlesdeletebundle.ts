import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BundlesDeleteBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class BundlesDeleteBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BundlesDeleteBundlePathParams;
}


export class BundlesDeleteBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
