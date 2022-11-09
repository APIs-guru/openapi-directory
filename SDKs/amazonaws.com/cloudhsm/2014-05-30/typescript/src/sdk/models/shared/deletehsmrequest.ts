import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteHsmRequest
/** 
 * Contains the inputs for the <a>DeleteHsm</a> operation.
**/
export class DeleteHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmArn" })
  hsmArn: string;
}
