import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
**/
export declare class OpenSearchAction extends SpeakeasyBase {
    endpoint: string;
    id: string;
    index: string;
    roleArn: string;
    type: string;
}
