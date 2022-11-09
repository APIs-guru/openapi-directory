import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";
import { Condition } from "./condition";


export class ScanInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=Count" })
  count?: boolean;

  @Metadata({ data: "json, name=ExclusiveStartKey" })
  exclusiveStartKey?: Key;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=ScanFilter", elemType: shared.Condition })
  scanFilter?: Map<string, Condition>;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
