import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerProvider } from "./containerprovider";
import { VirtualClusterStateEnum } from "./virtualclusterstateenum";


// VirtualCluster
/** 
 * This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.
**/
export class VirtualCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=containerProvider" })
  containerProvider?: ContainerProvider;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: VirtualClusterStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
