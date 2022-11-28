import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteService = "AmazonEC2ContainerServiceV20141113.DeleteService"
}
export declare class DeleteServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    headers: DeleteServiceHeaders;
    request: shared.DeleteServiceRequest;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    deleteServiceResponse?: shared.DeleteServiceResponse;
    invalidParameterException?: any;
    serverException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
}
