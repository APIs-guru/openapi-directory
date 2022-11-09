import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GlobalImagesDeleteFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesDeleteFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GlobalImagesDeleteFilePathParams;
}


export class GlobalImagesDeleteFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
