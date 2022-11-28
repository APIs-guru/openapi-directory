import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticsearchAction
/** 
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p> </note>
**/
export class ElasticsearchAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
