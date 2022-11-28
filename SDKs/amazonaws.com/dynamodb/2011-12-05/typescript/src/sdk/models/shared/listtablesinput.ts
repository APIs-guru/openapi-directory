import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTablesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartTableName" })
  exclusiveStartTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
