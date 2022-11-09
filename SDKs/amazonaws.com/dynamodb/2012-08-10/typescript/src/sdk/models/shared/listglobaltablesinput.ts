import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListGlobalTablesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartGlobalTableName" })
  exclusiveStartGlobalTableName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;
}
