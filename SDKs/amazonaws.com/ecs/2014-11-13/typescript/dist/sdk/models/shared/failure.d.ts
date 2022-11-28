import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class Failure extends SpeakeasyBase {
    arn?: string;
    detail?: string;
    reason?: string;
}
