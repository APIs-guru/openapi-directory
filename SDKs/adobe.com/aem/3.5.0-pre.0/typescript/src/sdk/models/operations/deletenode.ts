import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNodePathParams;
}


export class DeleteNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
