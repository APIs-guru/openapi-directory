import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJmxRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action" })
  action: string;
}


export class PostJmxRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJmxRepositoryPathParams;
}


export class PostJmxRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
