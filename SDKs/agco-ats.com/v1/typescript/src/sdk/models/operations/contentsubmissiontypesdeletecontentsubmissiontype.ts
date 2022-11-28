import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionTypesDeleteContentSubmissionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesDeleteContentSubmissionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionTypesDeleteContentSubmissionTypePathParams;
}


export class ContentSubmissionTypesDeleteContentSubmissionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
