import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostJmxRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action" })
  action: string;
}


export class PostJmxRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostJmxRepositoryPathParams;
}


export class PostJmxRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
