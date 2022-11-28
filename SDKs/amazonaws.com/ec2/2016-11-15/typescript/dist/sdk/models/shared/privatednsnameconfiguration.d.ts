import { SpeakeasyBase } from "../../../internal/utils";
import { DnsNameStateEnum } from "./dnsnamestateenum";
/**
 * Information about the private DNS name for the service endpoint. For more information about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service Private DNS Name Verification</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
**/
export declare class PrivateDnsNameConfiguration extends SpeakeasyBase {
    name?: string;
    state?: DnsNameStateEnum;
    type?: string;
    value?: string;
}
