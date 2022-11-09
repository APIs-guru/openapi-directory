import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetThingShadowResponse
/** 
 * The output from the GetThingShadow operation.
**/
export class GetThingShadowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;
}
