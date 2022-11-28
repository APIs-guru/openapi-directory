import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetUiCustomizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CSS" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageFile" })
  imageFile?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
