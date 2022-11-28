import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { ObjectReference } from "./objectreference";



// BatchCreateIndex
/** 
 * Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchCreateIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @SpeakeasyMetadata({ data: "json, name=IsUnique" })
  isUnique: boolean;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderedIndexedAttributeList", elemType: AttributeKey })
  orderedIndexedAttributeList: AttributeKey[];

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference?: ObjectReference;
}
