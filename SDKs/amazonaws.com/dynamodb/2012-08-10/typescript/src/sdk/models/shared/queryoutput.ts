import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";


// QueryOutput
/** 
 * Represents the output of a <code>Query</code> operation.
**/
export class QueryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @Metadata({ data: "json, name=LastEvaluatedKey", elemType: shared.AttributeValue })
  lastEvaluatedKey?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ScannedCount" })
  scannedCount?: number;
}
