import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetThingShadowResponse
/** 
 * The output from the GetThingShadow operation.
**/
export class GetThingShadowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}
