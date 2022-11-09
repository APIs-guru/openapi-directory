import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleasePostReleaseBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleId" })
  bundleId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleasePostReleaseBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleasePostReleaseBundlePathParams;
}


export class ReleasePostReleaseBundleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
