import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UsersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersDeletePathParams;
}


export class UsersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
