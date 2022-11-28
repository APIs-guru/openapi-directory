import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTableXAmzTargetEnum {
    AwsGlueDeleteTable = "AWSGlue.DeleteTable"
}
export declare class DeleteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableXAmzTargetEnum;
}
export declare class DeleteTableRequest extends SpeakeasyBase {
    headers: DeleteTableHeaders;
    request: shared.DeleteTableRequest;
}
export declare class DeleteTableResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteTableResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
