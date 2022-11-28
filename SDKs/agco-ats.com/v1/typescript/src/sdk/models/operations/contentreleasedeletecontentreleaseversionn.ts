import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentReleaseDeleteContentReleaseVersionnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" })
  contentReleaseId: number;
}


export class ContentReleaseDeleteContentReleaseVersionnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentReleaseDeleteContentReleaseVersionnPathParams;
}


export class ContentReleaseDeleteContentReleaseVersionnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
