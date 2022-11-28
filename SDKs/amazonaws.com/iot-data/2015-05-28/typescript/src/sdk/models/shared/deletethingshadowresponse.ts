import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteThingShadowResponse
/** 
 * The output from the DeleteThingShadow operation.
**/
export class DeleteThingShadowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;
}
