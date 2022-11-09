import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDataflowEndpointGroupPathParams extends SpeakeasyBase {
    dataflowEndpointGroupId: string;
}
export declare class DeleteDataflowEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDataflowEndpointGroupRequest extends SpeakeasyBase {
    pathParams: DeleteDataflowEndpointGroupPathParams;
    headers: DeleteDataflowEndpointGroupHeaders;
}
export declare class DeleteDataflowEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    dataflowEndpointGroupIdResponse?: shared.DataflowEndpointGroupIdResponse;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
