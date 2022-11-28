import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBulkDeploymentStatusPathParams extends SpeakeasyBase {
    bulkDeploymentId: string;
}
export declare class GetBulkDeploymentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBulkDeploymentStatusRequest extends SpeakeasyBase {
    pathParams: GetBulkDeploymentStatusPathParams;
    headers: GetBulkDeploymentStatusHeaders;
}
export declare class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBulkDeploymentStatusResponse?: shared.GetBulkDeploymentStatusResponse;
    statusCode: number;
}
