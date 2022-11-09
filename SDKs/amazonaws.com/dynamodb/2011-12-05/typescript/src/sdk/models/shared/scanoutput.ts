import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { Key } from "./key";


export class ScanOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @Metadata({ data: "json, name=LastEvaluatedKey" })
  lastEvaluatedKey?: Key;

  @Metadata({ data: "json, name=ScannedCount" })
  scannedCount?: number;
}
