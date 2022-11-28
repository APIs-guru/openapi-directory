import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListGlobalTablesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartGlobalTableName" })
  exclusiveStartGlobalTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;
}
