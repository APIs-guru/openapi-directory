import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDataflowEndpointGroupPathParams extends SpeakeasyBase {
    dataflowEndpointGroupId: string;
}
export declare class GetDataflowEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDataflowEndpointGroupRequest extends SpeakeasyBase {
    pathParams: GetDataflowEndpointGroupPathParams;
    headers: GetDataflowEndpointGroupHeaders;
}
export declare class GetDataflowEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    getDataflowEndpointGroupResponse?: shared.GetDataflowEndpointGroupResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
