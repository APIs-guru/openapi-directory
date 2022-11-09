import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupsAddUpdateGroupUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class UpdateGroupsAddUpdateGroupUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupsAddUpdateGroupUserPathParams;
}


export class UpdateGroupsAddUpdateGroupUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
