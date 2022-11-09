import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDescribeServiceUpdatesActionEnum {
    DescribeServiceUpdates = "DescribeServiceUpdates"
}
export declare enum GetDescribeServiceUpdatesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeServiceUpdatesQueryParams extends SpeakeasyBase {
    action: GetDescribeServiceUpdatesActionEnum;
    marker?: string;
    maxRecords?: number;
    serviceUpdateName?: string;
    serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];
    version: GetDescribeServiceUpdatesVersionEnum;
}
export declare class GetDescribeServiceUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeServiceUpdatesRequest extends SpeakeasyBase {
    queryParams: GetDescribeServiceUpdatesQueryParams;
    headers: GetDescribeServiceUpdatesHeaders;
}
export declare class GetDescribeServiceUpdatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
