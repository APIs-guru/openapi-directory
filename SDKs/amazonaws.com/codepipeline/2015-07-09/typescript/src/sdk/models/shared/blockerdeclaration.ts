import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockerTypeEnum } from "./blockertypeenum";



// BlockerDeclaration
/** 
 * Reserved for future use.
**/
export class BlockerDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: BlockerTypeEnum;
}
