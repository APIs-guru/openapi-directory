import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopBulkDeploymentPathParams extends SpeakeasyBase {
    bulkDeploymentId: string;
}
export declare class StopBulkDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopBulkDeploymentRequest extends SpeakeasyBase {
    pathParams: StopBulkDeploymentPathParams;
    headers: StopBulkDeploymentHeaders;
}
export declare class StopBulkDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    stopBulkDeploymentResponse?: Map<string, any>;
}
