import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteColumnStatisticsForTableXAmzTargetEnum {
    AwsGlueDeleteColumnStatisticsForTable = "AWSGlue.DeleteColumnStatisticsForTable"
}
export declare class DeleteColumnStatisticsForTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteColumnStatisticsForTableXAmzTargetEnum;
}
export declare class DeleteColumnStatisticsForTableRequest extends SpeakeasyBase {
    headers: DeleteColumnStatisticsForTableHeaders;
    request: shared.DeleteColumnStatisticsForTableRequest;
}
export declare class DeleteColumnStatisticsForTableResponse extends SpeakeasyBase {
    contentType: string;
    deleteColumnStatisticsForTableResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
