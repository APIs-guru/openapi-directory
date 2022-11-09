import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SdkResponse
/** 
 * The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
**/
export class SdkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;
}
