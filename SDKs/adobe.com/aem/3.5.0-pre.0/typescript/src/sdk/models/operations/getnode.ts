import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodePathParams;
}


export class GetNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
