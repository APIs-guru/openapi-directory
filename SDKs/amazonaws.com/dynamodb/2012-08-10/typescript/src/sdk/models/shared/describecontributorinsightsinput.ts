import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeContributorInsightsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
