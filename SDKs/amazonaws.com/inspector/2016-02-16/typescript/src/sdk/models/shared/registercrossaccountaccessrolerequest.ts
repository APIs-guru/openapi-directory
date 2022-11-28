import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterCrossAccountAccessRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
