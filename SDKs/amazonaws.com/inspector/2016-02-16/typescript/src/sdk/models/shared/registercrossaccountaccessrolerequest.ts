import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterCrossAccountAccessRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
