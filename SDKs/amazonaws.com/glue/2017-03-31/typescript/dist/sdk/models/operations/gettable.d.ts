import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTableXAmzTargetEnum {
    AwsGlueGetTable = "AWSGlue.GetTable"
}
export declare class GetTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTableXAmzTargetEnum;
}
export declare class GetTableRequest extends SpeakeasyBase {
    headers: GetTableHeaders;
    request: shared.GetTableRequest;
}
export declare class GetTableResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTableResponse?: shared.GetTableResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
