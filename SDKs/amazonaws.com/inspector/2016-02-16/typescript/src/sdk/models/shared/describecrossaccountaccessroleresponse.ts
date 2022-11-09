import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCrossAccountAccessRoleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registeredAt" })
  registeredAt: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=valid" })
  valid: boolean;
}
