import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticsearchDataSourceConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class ElasticsearchDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;
}
