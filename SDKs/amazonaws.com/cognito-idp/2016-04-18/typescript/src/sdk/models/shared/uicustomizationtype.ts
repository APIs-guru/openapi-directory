import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UiCustomizationType
/** 
 * A container for the UI customization information for a user pool's built-in app UI.
**/
export class UiCustomizationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CSS" })
  css?: string;

  @Metadata({ data: "json, name=CSSVersion" })
  cssVersion?: string;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
