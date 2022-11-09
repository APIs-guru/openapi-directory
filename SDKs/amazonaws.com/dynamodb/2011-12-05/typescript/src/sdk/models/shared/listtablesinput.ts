import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTablesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartTableName" })
  exclusiveStartTableName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
