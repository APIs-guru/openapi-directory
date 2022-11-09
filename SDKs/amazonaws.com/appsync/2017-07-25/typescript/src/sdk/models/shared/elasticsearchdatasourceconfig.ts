import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticsearchDataSourceConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class ElasticsearchDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;
}
