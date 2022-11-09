import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StartMonitoringMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartMonitoringMemberRequestBody extends SpeakeasyBase {
    accountId: string;
    graphArn: string;
}
export declare class StartMonitoringMemberRequest extends SpeakeasyBase {
    headers: StartMonitoringMemberHeaders;
    request: StartMonitoringMemberRequestBody;
}
export declare class StartMonitoringMemberResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
