import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigPropertyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configNodeName" })
  configNodeName: string;
}


export class PostConfigPropertyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostConfigPropertyPathParams;
}


export class PostConfigPropertyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
