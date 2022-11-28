import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationCodesSharedModelsParameter
/** 
 * A parameter used to create an authorization code.
**/
export class AuthorizationCodesSharedModelsParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
