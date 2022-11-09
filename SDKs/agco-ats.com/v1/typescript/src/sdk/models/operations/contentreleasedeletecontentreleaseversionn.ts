import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentReleaseDeleteContentReleaseVersionnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" })
  contentReleaseId: number;
}


export class ContentReleaseDeleteContentReleaseVersionnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentReleaseDeleteContentReleaseVersionnPathParams;
}


export class ContentReleaseDeleteContentReleaseVersionnResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
