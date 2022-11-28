import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesDeleteFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class FilesDeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesDeleteFilePathParams;
}


export class FilesDeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
