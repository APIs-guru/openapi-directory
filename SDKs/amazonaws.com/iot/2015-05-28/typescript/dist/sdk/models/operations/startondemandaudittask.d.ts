import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartOnDemandAuditTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartOnDemandAuditTaskRequestBody extends SpeakeasyBase {
    targetCheckNames: string[];
}
export declare class StartOnDemandAuditTaskRequest extends SpeakeasyBase {
    headers: StartOnDemandAuditTaskHeaders;
    request: StartOnDemandAuditTaskRequestBody;
}
export declare class StartOnDemandAuditTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    startOnDemandAuditTaskResponse?: shared.StartOnDemandAuditTaskResponse;
    statusCode: number;
    throttlingException?: any;
}
