import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUiCustomizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
