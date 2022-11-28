import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseDeleteReleaseBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleaseDeleteReleaseBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseDeleteReleaseBundlePathParams;
}


export class ReleaseDeleteReleaseBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
