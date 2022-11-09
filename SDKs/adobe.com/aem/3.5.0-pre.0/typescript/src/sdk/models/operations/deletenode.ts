import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNodePathParams;
}


export class DeleteNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
