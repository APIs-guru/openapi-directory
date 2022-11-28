import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUiCustomizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
