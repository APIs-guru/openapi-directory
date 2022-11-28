import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteHsmRequest
/** 
 * Contains the inputs for the <a>DeleteHsm</a> operation.
**/
export class DeleteHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn: string;
}
