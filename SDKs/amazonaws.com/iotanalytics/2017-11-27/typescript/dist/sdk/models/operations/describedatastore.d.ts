import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDatastorePathParams extends SpeakeasyBase {
    datastoreName: string;
}
export declare class DescribeDatastoreQueryParams extends SpeakeasyBase {
    includeStatistics?: boolean;
}
export declare class DescribeDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDatastoreRequest extends SpeakeasyBase {
    pathParams: DescribeDatastorePathParams;
    queryParams: DescribeDatastoreQueryParams;
    headers: DescribeDatastoreHeaders;
}
export declare class DescribeDatastoreResponse extends SpeakeasyBase {
    contentType: string;
    describeDatastoreResponse?: shared.DescribeDatastoreResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
