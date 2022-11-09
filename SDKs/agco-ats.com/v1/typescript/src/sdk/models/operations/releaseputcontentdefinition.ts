import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleasePutContentDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=releaseId" })
  releaseId: number;
}


export class ReleasePutContentDefinitionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReleasePutContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleasePutContentDefinitionPathParams;

  @Metadata()
  request: ReleasePutContentDefinitionRequests;
}


export class ReleasePutContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
