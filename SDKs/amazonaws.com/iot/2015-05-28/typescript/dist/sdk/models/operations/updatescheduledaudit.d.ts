import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateScheduledAuditPathParams extends SpeakeasyBase {
    scheduledAuditName: string;
}
export declare class UpdateScheduledAuditHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}
export declare enum UpdateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Biweekly = "BIWEEKLY",
    Monthly = "MONTHLY"
}
export declare class UpdateScheduledAuditRequestBody extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: UpdateScheduledAuditRequestBodyDayOfWeekEnum;
    frequency?: UpdateScheduledAuditRequestBodyFrequencyEnum;
    targetCheckNames?: string[];
}
export declare class UpdateScheduledAuditRequest extends SpeakeasyBase {
    pathParams: UpdateScheduledAuditPathParams;
    headers: UpdateScheduledAuditHeaders;
    request: UpdateScheduledAuditRequestBody;
}
export declare class UpdateScheduledAuditResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateScheduledAuditResponse?: shared.UpdateScheduledAuditResponse;
}
