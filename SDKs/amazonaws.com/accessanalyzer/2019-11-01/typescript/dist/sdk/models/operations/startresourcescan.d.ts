import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartResourceScanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartResourceScanRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    resourceArn: string;
}
export declare class StartResourceScanRequest extends SpeakeasyBase {
    headers: StartResourceScanHeaders;
    request: StartResourceScanRequestBody;
}
export declare class StartResourceScanResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
