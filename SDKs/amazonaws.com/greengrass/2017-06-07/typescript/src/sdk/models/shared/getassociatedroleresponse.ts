import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAssociatedRoleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociatedAt" })
  associatedAt?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
