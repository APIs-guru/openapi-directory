import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationCodesSharedModelsCategory
/** 
 * A category for Authorization Code Definitions
**/
export class AuthorizationCodesSharedModelsCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
