import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleasePutContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=releaseId" })
  releaseId: number;
}


export class ReleasePutContentDefinitionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReleasePutContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleasePutContentDefinitionPathParams;

  @SpeakeasyMetadata()
  request: ReleasePutContentDefinitionRequests;
}


export class ReleasePutContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
