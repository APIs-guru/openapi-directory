import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateColumnStatisticsForTableXAmzTargetEnum {
    AwsGlueUpdateColumnStatisticsForTable = "AWSGlue.UpdateColumnStatisticsForTable"
}
export declare class UpdateColumnStatisticsForTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateColumnStatisticsForTableXAmzTargetEnum;
}
export declare class UpdateColumnStatisticsForTableRequest extends SpeakeasyBase {
    headers: UpdateColumnStatisticsForTableHeaders;
    request: shared.UpdateColumnStatisticsForTableRequest;
}
export declare class UpdateColumnStatisticsForTableResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateColumnStatisticsForTableResponse?: shared.UpdateColumnStatisticsForTableResponse;
}
