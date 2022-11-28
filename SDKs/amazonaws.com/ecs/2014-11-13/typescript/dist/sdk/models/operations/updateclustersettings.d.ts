import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClusterSettingsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateClusterSettings = "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings"
}
export declare class UpdateClusterSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterSettingsXAmzTargetEnum;
}
export declare class UpdateClusterSettingsRequest extends SpeakeasyBase {
    headers: UpdateClusterSettingsHeaders;
    request: shared.UpdateClusterSettingsRequest;
}
export declare class UpdateClusterSettingsResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    updateClusterSettingsResponse?: shared.UpdateClusterSettingsResponse;
}
