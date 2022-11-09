import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}
export declare enum GetCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelConversionTaskQueryParams extends SpeakeasyBase {
    action: GetCancelConversionTaskActionEnum;
    conversionTaskId: string;
    dryRun?: boolean;
    reasonMessage?: string;
    version: GetCancelConversionTaskVersionEnum;
}
export declare class GetCancelConversionTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelConversionTaskRequest extends SpeakeasyBase {
    queryParams: GetCancelConversionTaskQueryParams;
    headers: GetCancelConversionTaskHeaders;
}
export declare class GetCancelConversionTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
