import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeManagedEndpointPathParams extends SpeakeasyBase {
    endpointId: string;
    virtualClusterId: string;
}
export declare class DescribeManagedEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeManagedEndpointRequest extends SpeakeasyBase {
    pathParams: DescribeManagedEndpointPathParams;
    headers: DescribeManagedEndpointHeaders;
}
export declare class DescribeManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    describeManagedEndpointResponse?: shared.DescribeManagedEndpointResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
