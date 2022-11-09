import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKey } from "./attributekey";
import { ObjectReference } from "./objectreference";


// BatchCreateIndex
/** 
 * Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchCreateIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @Metadata({ data: "json, name=IsUnique" })
  isUnique: boolean;

  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;

  @Metadata({ data: "json, name=OrderedIndexedAttributeList", elemType: shared.AttributeKey })
  orderedIndexedAttributeList: AttributeKey[];

  @Metadata({ data: "json, name=ParentReference" })
  parentReference?: ObjectReference;
}
