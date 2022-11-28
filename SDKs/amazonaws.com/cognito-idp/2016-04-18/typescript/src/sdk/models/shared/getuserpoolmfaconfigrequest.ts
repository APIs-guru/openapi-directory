import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserPoolMfaConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
