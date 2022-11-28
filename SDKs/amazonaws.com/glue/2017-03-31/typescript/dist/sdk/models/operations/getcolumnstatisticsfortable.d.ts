import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetColumnStatisticsForTableXAmzTargetEnum {
    AwsGlueGetColumnStatisticsForTable = "AWSGlue.GetColumnStatisticsForTable"
}
export declare class GetColumnStatisticsForTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetColumnStatisticsForTableXAmzTargetEnum;
}
export declare class GetColumnStatisticsForTableRequest extends SpeakeasyBase {
    headers: GetColumnStatisticsForTableHeaders;
    request: shared.GetColumnStatisticsForTableRequest;
}
export declare class GetColumnStatisticsForTableResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getColumnStatisticsForTableResponse?: shared.GetColumnStatisticsForTableResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
