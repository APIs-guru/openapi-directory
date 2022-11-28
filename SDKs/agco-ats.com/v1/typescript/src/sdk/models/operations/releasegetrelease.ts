import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleaseGetReleasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleaseGetReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseGetReleasePathParams;
}


export class ReleaseGetReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
