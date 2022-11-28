import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdminSetUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=Permanent" })
  permanent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
