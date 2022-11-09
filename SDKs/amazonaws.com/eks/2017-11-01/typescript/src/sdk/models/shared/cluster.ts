import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";
import { ConnectorConfigResponse } from "./connectorconfigresponse";
import { EncryptionConfig } from "./encryptionconfig";
import { Identity } from "./identity";
import { KubernetesNetworkConfigResponse } from "./kubernetesnetworkconfigresponse";
import { Logging } from "./logging";
import { VpcConfigResponse } from "./vpcconfigresponse";
import { ClusterStatusEnum } from "./clusterstatusenum";


// Cluster
/** 
 * An object representing an Amazon EKS cluster.
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=certificateAuthority" })
  certificateAuthority?: Certificate;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=connectorConfig" })
  connectorConfig?: ConnectorConfigResponse;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=encryptionConfig", elemType: shared.EncryptionConfig })
  encryptionConfig?: EncryptionConfig[];

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: Identity;

  @Metadata({ data: "json, name=kubernetesNetworkConfig" })
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;

  @Metadata({ data: "json, name=logging" })
  logging?: Logging;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig?: VpcConfigResponse;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: ClusterStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
