import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { Node } from "./node";
import { NotificationConfiguration } from "./notificationconfiguration";
import { ParameterGroupStatus } from "./parametergroupstatus";
import { SseDescription } from "./ssedescription";
import { SecurityGroupMembership } from "./securitygroupmembership";
/**
 * Contains all of the attributes of a specific DAX cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    activeNodes?: number;
    clusterArn?: string;
    clusterDiscoveryEndpoint?: Endpoint;
    clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;
    clusterName?: string;
    description?: string;
    iamRoleArn?: string;
    nodeIdsToRemove?: string[];
    nodeType?: string;
    nodes?: Node[];
    notificationConfiguration?: NotificationConfiguration;
    parameterGroup?: ParameterGroupStatus;
    preferredMaintenanceWindow?: string;
    sseDescription?: SseDescription;
    securityGroups?: SecurityGroupMembership[];
    status?: string;
    subnetGroup?: string;
    totalNodes?: number;
}
