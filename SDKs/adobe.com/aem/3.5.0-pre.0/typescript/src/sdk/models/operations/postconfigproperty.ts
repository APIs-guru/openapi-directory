import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigPropertyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configNodeName" })
  configNodeName: string;
}


export class PostConfigPropertyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostConfigPropertyPathParams;
}


export class PostConfigPropertyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
