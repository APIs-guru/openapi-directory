import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SharedImagePermissions } from "./sharedimagepermissions";


export class DescribeImagePermissionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SharedImagePermissionsList", elemType: shared.SharedImagePermissions })
  sharedImagePermissionsList?: SharedImagePermissions[];
}
