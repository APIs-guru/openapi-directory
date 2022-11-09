import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateHsmResponse
/** 
 * Contains the output of the <code>CreateHsm</code> operation.
**/
export class CreateHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmArn" })
  hsmArn?: string;
}
