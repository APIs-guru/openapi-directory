import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteClusterPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    pathParams: DeleteClusterPathParams;
    headers: DeleteClusterHeaders;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteClusterResponse?: shared.DeleteClusterResponse;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
