import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionsDeleteContentSubmissionAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionAttributeID" })
  contentSubmissionAttributeId: number;
}


export class ContentSubmissionsDeleteContentSubmissionAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionsDeleteContentSubmissionAttributePathParams;
}


export class ContentSubmissionsDeleteContentSubmissionAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
