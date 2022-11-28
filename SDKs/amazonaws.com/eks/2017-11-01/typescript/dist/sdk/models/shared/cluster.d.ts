import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { ConnectorConfigResponse } from "./connectorconfigresponse";
import { EncryptionConfig } from "./encryptionconfig";
import { Identity } from "./identity";
import { KubernetesNetworkConfigResponse } from "./kubernetesnetworkconfigresponse";
import { Logging } from "./logging";
import { VpcConfigResponse } from "./vpcconfigresponse";
import { ClusterStatusEnum } from "./clusterstatusenum";
/**
 * An object representing an Amazon EKS cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    arn?: string;
    certificateAuthority?: Certificate;
    clientRequestToken?: string;
    connectorConfig?: ConnectorConfigResponse;
    createdAt?: Date;
    encryptionConfig?: EncryptionConfig[];
    endpoint?: string;
    identity?: Identity;
    kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
    logging?: Logging;
    name?: string;
    platformVersion?: string;
    resourcesVpcConfig?: VpcConfigResponse;
    roleArn?: string;
    status?: ClusterStatusEnum;
    tags?: Map<string, string>;
    version?: string;
}
