import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV2ContentReleasesContentReleaseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" })
  contentReleaseId: number;
}


export class GetApiV2ContentReleasesContentReleaseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV2ContentReleasesContentReleaseIdPathParams;
}


export class GetApiV2ContentReleasesContentReleaseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
