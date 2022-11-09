import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupsRemoveUpdateGroupUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class UpdateGroupsRemoveUpdateGroupUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupsRemoveUpdateGroupUserPathParams;
}


export class UpdateGroupsRemoveUpdateGroupUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
