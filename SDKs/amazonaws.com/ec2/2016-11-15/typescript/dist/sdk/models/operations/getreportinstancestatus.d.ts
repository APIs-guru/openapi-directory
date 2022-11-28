import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}
export declare enum GetReportInstanceStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired"
}
export declare enum GetReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReportInstanceStatusQueryParams extends SpeakeasyBase {
    action: GetReportInstanceStatusActionEnum;
    description?: string;
    dryRun?: boolean;
    endTime?: Date;
    instanceId: string[];
    reasonCode: shared.ReportInstanceReasonCodesEnum[];
    startTime?: Date;
    status: GetReportInstanceStatusStatusEnum;
    version: GetReportInstanceStatusVersionEnum;
}
export declare class GetReportInstanceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReportInstanceStatusRequest extends SpeakeasyBase {
    queryParams: GetReportInstanceStatusQueryParams;
    headers: GetReportInstanceStatusHeaders;
}
export declare class GetReportInstanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
