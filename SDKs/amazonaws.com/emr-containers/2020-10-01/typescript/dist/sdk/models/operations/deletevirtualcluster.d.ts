import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVirtualClusterPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class DeleteVirtualClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVirtualClusterRequest extends SpeakeasyBase {
    pathParams: DeleteVirtualClusterPathParams;
    headers: DeleteVirtualClusterHeaders;
}
export declare class DeleteVirtualClusterResponse extends SpeakeasyBase {
    contentType: string;
    deleteVirtualClusterResponse?: shared.DeleteVirtualClusterResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
