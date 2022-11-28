import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
**/
export declare class Listener extends SpeakeasyBase {
    instancePort: number;
    instanceProtocol?: string;
    loadBalancerPort: number;
    protocol: string;
    sslCertificateId?: string;
}
