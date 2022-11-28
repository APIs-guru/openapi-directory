import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupsRemoveUpdateGroupUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class UpdateGroupsRemoveUpdateGroupUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupsRemoveUpdateGroupUserPathParams;
}


export class UpdateGroupsRemoveUpdateGroupUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
