import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseDeleteReleaseBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleId" })
  bundleId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleaseDeleteReleaseBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseDeleteReleaseBundlePathParams;
}


export class ReleaseDeleteReleaseBundleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
