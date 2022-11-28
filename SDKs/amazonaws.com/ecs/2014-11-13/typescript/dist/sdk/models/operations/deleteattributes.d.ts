import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteAttributes = "AmazonEC2ContainerServiceV20141113.DeleteAttributes"
}
export declare class DeleteAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAttributesXAmzTargetEnum;
}
export declare class DeleteAttributesRequest extends SpeakeasyBase {
    headers: DeleteAttributesHeaders;
    request: shared.DeleteAttributesRequest;
}
export declare class DeleteAttributesResponse extends SpeakeasyBase {
    clusterNotFoundException?: any;
    contentType: string;
    deleteAttributesResponse?: shared.DeleteAttributesResponse;
    invalidParameterException?: any;
    statusCode: number;
    targetNotFoundException?: any;
}
