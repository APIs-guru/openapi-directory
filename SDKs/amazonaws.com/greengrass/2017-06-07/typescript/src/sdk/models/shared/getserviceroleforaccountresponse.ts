import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceRoleForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociatedAt" })
  associatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
