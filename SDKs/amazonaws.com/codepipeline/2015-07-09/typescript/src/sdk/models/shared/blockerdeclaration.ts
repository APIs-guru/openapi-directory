import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockerTypeEnum } from "./blockertypeenum";


// BlockerDeclaration
/** 
 * Reserved for future use.
**/
export class BlockerDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: BlockerTypeEnum;
}
