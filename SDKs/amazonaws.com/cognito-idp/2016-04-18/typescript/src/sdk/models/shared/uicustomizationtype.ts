import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UiCustomizationType
/** 
 * A container for the UI customization information for a user pool's built-in app UI.
**/
export class UiCustomizationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CSS" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=CSSVersion" })
  cssVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
