import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerProvider } from "./containerprovider";
import { VirtualClusterStateEnum } from "./virtualclusterstateenum";
/**
 * This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.
**/
export declare class VirtualCluster extends SpeakeasyBase {
    arn?: string;
    containerProvider?: ContainerProvider;
    createdAt?: Date;
    id?: string;
    name?: string;
    state?: VirtualClusterStateEnum;
    tags?: Map<string, string>;
}
