import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeContributorInsightsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
