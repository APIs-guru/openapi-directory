import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SDKResponse
/** 
 * The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
**/
export class SDKResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;
}
