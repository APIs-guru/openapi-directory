import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationCodesSharedModelsParameter
/** 
 * A parameter used to create an authorization code.
**/
export class AuthorizationCodesSharedModelsParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
