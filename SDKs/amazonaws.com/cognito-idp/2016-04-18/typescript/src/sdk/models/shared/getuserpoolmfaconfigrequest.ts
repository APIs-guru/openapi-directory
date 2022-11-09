import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserPoolMfaConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
