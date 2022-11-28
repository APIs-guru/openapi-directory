import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateAuthority" })
  certificateAuthority?: Certificate;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorConfig" })
  connectorConfig?: ConnectorConfigResponse;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig", elemType: EncryptionConfig })
  encryptionConfig?: EncryptionConfig[];

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: Identity;

  @SpeakeasyMetadata({ data: "json, name=kubernetesNetworkConfig" })
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: Logging;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesVpcConfig" })
  resourcesVpcConfig?: VpcConfigResponse;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClusterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
