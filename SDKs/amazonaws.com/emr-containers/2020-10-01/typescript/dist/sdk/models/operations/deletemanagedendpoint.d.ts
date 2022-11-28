import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteManagedEndpointPathParams extends SpeakeasyBase {
    endpointId: string;
    virtualClusterId: string;
}
export declare class DeleteManagedEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteManagedEndpointRequest extends SpeakeasyBase {
    pathParams: DeleteManagedEndpointPathParams;
    headers: DeleteManagedEndpointHeaders;
}
export declare class DeleteManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    deleteManagedEndpointResponse?: shared.DeleteManagedEndpointResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
