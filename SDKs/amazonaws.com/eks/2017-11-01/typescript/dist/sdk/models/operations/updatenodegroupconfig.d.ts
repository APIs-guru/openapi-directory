import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateNodegroupConfigPathParams extends SpeakeasyBase {
    name: string;
    nodegroupName: string;
}
export declare class UpdateNodegroupConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing a Kubernetes label change for a managed node group.
**/
export declare class UpdateNodegroupConfigRequestBodyLabels extends SpeakeasyBase {
    addOrUpdateLabels?: Map<string, string>;
    removeLabels?: string[];
}
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export declare class UpdateNodegroupConfigRequestBodyScalingConfig extends SpeakeasyBase {
    desiredSize?: number;
    maxSize?: number;
    minSize?: number;
}
/**
 * An object representing the details of an update to a taints payload.
**/
export declare class UpdateNodegroupConfigRequestBodyTaints extends SpeakeasyBase {
    addOrUpdateTaints?: shared.Taint[];
    removeTaints?: shared.Taint[];
}
/**
 * The node group update configuration.
**/
export declare class UpdateNodegroupConfigRequestBodyUpdateConfig extends SpeakeasyBase {
    maxUnavailable?: number;
    maxUnavailablePercentage?: number;
}
export declare class UpdateNodegroupConfigRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    labels?: UpdateNodegroupConfigRequestBodyLabels;
    scalingConfig?: UpdateNodegroupConfigRequestBodyScalingConfig;
    taints?: UpdateNodegroupConfigRequestBodyTaints;
    updateConfig?: UpdateNodegroupConfigRequestBodyUpdateConfig;
}
export declare class UpdateNodegroupConfigRequest extends SpeakeasyBase {
    pathParams: UpdateNodegroupConfigPathParams;
    headers: UpdateNodegroupConfigHeaders;
    request: UpdateNodegroupConfigRequestBody;
}
export declare class UpdateNodegroupConfigResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    updateNodegroupConfigResponse?: shared.UpdateNodegroupConfigResponse;
}
