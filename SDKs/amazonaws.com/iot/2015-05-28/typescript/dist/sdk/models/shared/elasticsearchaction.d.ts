import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p> </note>
**/
export declare class ElasticsearchAction extends SpeakeasyBase {
    endpoint: string;
    id: string;
    index: string;
    roleArn: string;
    type: string;
}
