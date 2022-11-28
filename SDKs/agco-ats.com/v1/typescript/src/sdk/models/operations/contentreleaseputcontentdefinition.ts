import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentReleasePutContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" })
  contentReleaseId: number;
}


export class ContentReleasePutContentDefinitionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion1?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion2?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentReleasePutContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentReleasePutContentDefinitionPathParams;

  @SpeakeasyMetadata()
  request: ContentReleasePutContentDefinitionRequests;
}


export class ContentReleasePutContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
