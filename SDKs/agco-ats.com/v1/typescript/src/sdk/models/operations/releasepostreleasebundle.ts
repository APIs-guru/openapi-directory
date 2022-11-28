import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleasePostReleaseBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleasePostReleaseBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleasePostReleaseBundlePathParams;
}


export class ReleasePostReleaseBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
