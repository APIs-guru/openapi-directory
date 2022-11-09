import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationCodesSharedModelsCategory
/** 
 * A category for Authorization Code Definitions
**/
export class AuthorizationCodesSharedModelsCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
