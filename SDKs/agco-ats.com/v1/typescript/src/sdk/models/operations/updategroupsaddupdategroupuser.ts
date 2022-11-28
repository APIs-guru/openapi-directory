import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupsAddUpdateGroupUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class UpdateGroupsAddUpdateGroupUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupsAddUpdateGroupUserPathParams;
}


export class UpdateGroupsAddUpdateGroupUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
