import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScheduledAuditPathParams extends SpeakeasyBase {
    scheduledAuditName: string;
}
export declare class CreateScheduledAuditHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}
export declare enum CreateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Biweekly = "BIWEEKLY",
    Monthly = "MONTHLY"
}
export declare class CreateScheduledAuditRequestBody extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: CreateScheduledAuditRequestBodyDayOfWeekEnum;
    frequency: CreateScheduledAuditRequestBodyFrequencyEnum;
    tags?: shared.Tag[];
    targetCheckNames: string[];
}
export declare class CreateScheduledAuditRequest extends SpeakeasyBase {
    pathParams: CreateScheduledAuditPathParams;
    headers: CreateScheduledAuditHeaders;
    request: CreateScheduledAuditRequestBody;
}
export declare class CreateScheduledAuditResponse extends SpeakeasyBase {
    contentType: string;
    createScheduledAuditResponse?: shared.CreateScheduledAuditResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
