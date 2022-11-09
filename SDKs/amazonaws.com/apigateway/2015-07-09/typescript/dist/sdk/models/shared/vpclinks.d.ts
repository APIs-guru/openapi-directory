import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcLink } from "./vpclink";
/**
 * <p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div>
**/
export declare class VpcLinks extends SpeakeasyBase {
    items?: VpcLink[];
    position?: string;
}
