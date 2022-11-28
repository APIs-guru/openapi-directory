import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyHsmResponse
/** 
 * Contains the output of the <a>ModifyHsm</a> operation.
**/
export class ModifyHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn?: string;
}
