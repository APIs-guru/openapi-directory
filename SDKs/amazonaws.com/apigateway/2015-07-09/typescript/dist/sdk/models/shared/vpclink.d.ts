import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcLinkStatusEnum } from "./vpclinkstatusenum";
/**
 * <p>An API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class="remarks"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p></p> </div>
**/
export declare class VpcLink extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    status?: VpcLinkStatusEnum;
    statusMessage?: string;
    tags?: Map<string, string>;
    targetArns?: string[];
}
