import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RolesDeleteRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesDeleteRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesDeleteRolePathParams;
}


export class RolesDeleteRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
