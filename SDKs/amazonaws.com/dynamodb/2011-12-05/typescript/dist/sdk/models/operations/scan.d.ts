import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScanQueryParams extends SpeakeasyBase {
    exclusiveStartKey?: string;
    limit?: string;
}
export declare enum ScanXAmzTargetEnum {
    DynamoDb20111205Scan = "DynamoDB_20111205.Scan"
}
export declare class ScanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScanXAmzTargetEnum;
}
export declare class ScanRequest extends SpeakeasyBase {
    queryParams: ScanQueryParams;
    headers: ScanHeaders;
    request: shared.ScanInput;
}
export declare class ScanResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    scanOutput?: shared.ScanOutput;
    statusCode: number;
}
