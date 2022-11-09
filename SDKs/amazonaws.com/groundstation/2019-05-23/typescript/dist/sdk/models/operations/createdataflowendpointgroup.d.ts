import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDataflowEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDataflowEndpointGroupRequestBody extends SpeakeasyBase {
    endpointDetails: shared.EndpointDetails[];
    tags?: Map<string, string>;
}
export declare class CreateDataflowEndpointGroupRequest extends SpeakeasyBase {
    headers: CreateDataflowEndpointGroupHeaders;
    request: CreateDataflowEndpointGroupRequestBody;
}
export declare class CreateDataflowEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    dataflowEndpointGroupIdResponse?: shared.DataflowEndpointGroupIdResponse;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
