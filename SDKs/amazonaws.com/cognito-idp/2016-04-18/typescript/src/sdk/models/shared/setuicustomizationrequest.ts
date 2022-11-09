import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetUiCustomizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CSS" })
  css?: string;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ImageFile" })
  imageFile?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
