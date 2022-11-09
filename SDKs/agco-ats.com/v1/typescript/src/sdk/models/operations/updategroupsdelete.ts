import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class UpdateGroupsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupsDeletePathParams;
}


export class UpdateGroupsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
