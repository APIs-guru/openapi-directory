import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelBundleTaskActionEnum {
    CancelBundleTask = "CancelBundleTask"
}
export declare enum GetCancelBundleTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelBundleTaskQueryParams extends SpeakeasyBase {
    action: GetCancelBundleTaskActionEnum;
    bundleId: string;
    dryRun?: boolean;
    version: GetCancelBundleTaskVersionEnum;
}
export declare class GetCancelBundleTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelBundleTaskRequest extends SpeakeasyBase {
    queryParams: GetCancelBundleTaskQueryParams;
    headers: GetCancelBundleTaskHeaders;
}
export declare class GetCancelBundleTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
