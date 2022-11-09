import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilesDeleteFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class FilesDeleteFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesDeleteFilePathParams;
}


export class FilesDeleteFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
