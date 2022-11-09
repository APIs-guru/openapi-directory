import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseGetReleasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReleaseId" })
  releaseId: number;
}


export class ReleaseGetReleaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseGetReleasePathParams;
}


export class ReleaseGetReleaseResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
