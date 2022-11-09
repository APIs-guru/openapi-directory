import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityStoreId" })
  identityStoreId: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
