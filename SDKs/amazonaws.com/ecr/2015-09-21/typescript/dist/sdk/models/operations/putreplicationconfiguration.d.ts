import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutReplicationConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutReplicationConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration"
}
export declare class PutReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutReplicationConfigurationXAmzTargetEnum;
}
export declare class PutReplicationConfigurationRequest extends SpeakeasyBase {
    headers: PutReplicationConfigurationHeaders;
    request: shared.PutReplicationConfigurationRequest;
}
export declare class PutReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putReplicationConfigurationResponse?: shared.PutReplicationConfigurationResponse;
    serverException?: any;
    statusCode: number;
    validationException?: any;
}
