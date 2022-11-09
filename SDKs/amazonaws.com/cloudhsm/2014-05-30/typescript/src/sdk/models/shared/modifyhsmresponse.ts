import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyHsmResponse
/** 
 * Contains the output of the <a>ModifyHsm</a> operation.
**/
export class ModifyHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmArn" })
  hsmArn?: string;
}
