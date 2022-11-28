import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GlobalImagesDeleteFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesDeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GlobalImagesDeleteFilePathParams;
}


export class GlobalImagesDeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
