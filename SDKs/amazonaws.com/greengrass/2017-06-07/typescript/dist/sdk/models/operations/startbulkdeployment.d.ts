import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartBulkDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class StartBulkDeploymentRequestBody extends SpeakeasyBase {
    executionRoleArn: string;
    inputFileUri: string;
    tags?: Map<string, string>;
}
export declare class StartBulkDeploymentRequest extends SpeakeasyBase {
    headers: StartBulkDeploymentHeaders;
    request: StartBulkDeploymentRequestBody;
}
export declare class StartBulkDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    startBulkDeploymentResponse?: shared.StartBulkDeploymentResponse;
    statusCode: number;
}
