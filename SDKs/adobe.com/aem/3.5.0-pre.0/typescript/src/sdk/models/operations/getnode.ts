import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodePathParams;
}


export class GetNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
