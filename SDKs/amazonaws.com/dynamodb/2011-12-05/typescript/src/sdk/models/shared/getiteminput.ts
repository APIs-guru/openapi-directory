import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Key } from "./key";


export class GetItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=Key" })
  key: Key;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
