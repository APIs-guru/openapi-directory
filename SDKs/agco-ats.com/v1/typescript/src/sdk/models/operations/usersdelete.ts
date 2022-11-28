import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UsersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersDeletePathParams;
}


export class UsersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
