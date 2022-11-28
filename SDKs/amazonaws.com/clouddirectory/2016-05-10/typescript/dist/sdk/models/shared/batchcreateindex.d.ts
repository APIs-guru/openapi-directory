import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { ObjectReference } from "./objectreference";
/**
 * Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchCreateIndex extends SpeakeasyBase {
    batchReferenceName?: string;
    isUnique: boolean;
    linkName?: string;
    orderedIndexedAttributeList: AttributeKey[];
    parentReference?: ObjectReference;
}
