import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2ContentReleasesContentReleaseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" })
  contentReleaseId: number;
}


export class GetApiV2ContentReleasesContentReleaseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2ContentReleasesContentReleaseIdPathParams;
}


export class GetApiV2ContentReleasesContentReleaseIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
