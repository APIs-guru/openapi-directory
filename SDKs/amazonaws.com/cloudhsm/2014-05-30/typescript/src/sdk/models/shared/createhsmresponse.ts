import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateHsmResponse
/** 
 * Contains the output of the <code>CreateHsm</code> operation.
**/
export class CreateHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn?: string;
}
