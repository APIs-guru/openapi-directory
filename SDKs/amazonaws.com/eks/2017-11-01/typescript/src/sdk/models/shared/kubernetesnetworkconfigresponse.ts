import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KubernetesNetworkConfigResponse
/** 
 * The Kubernetes network configuration for the cluster.
**/
export class KubernetesNetworkConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceIpv4Cidr" })
  serviceIpv4Cidr?: string;
}
