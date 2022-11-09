import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RolesDeleteRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesDeleteRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RolesDeleteRolePathParams;
}


export class RolesDeleteRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
