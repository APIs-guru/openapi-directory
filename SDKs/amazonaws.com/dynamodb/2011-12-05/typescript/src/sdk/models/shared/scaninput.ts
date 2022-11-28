import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Condition } from "./condition";



export class ScanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartKey" })
  exclusiveStartKey?: Key;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=ScanFilter", elemType: Condition })
  scanFilter?: Map<string, Condition>;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
