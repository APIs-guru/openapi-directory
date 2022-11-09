import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KubernetesNetworkConfigResponse
/** 
 * The Kubernetes network configuration for the cluster.
**/
export class KubernetesNetworkConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceIpv4Cidr" })
  serviceIpv4Cidr?: string;
}
