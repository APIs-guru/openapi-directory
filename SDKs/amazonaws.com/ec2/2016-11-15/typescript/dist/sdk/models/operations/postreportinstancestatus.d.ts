import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}
export declare enum PostReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReportInstanceStatusQueryParams extends SpeakeasyBase {
    action: PostReportInstanceStatusActionEnum;
    version: PostReportInstanceStatusVersionEnum;
}
export declare class PostReportInstanceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReportInstanceStatusRequest extends SpeakeasyBase {
    queryParams: PostReportInstanceStatusQueryParams;
    headers: PostReportInstanceStatusHeaders;
    request?: Uint8Array;
}
export declare class PostReportInstanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
