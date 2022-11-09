import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticsearchAction
/** 
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p> </note>
**/
export class ElasticsearchAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=index" })
  index: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
