import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdminSetUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=Permanent" })
  permanent?: boolean;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
