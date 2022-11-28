import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedImagePermissions } from "./sharedimagepermissions";



export class DescribeImagePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedImagePermissionsList", elemType: SharedImagePermissions })
  sharedImagePermissionsList?: SharedImagePermissions[];
}
