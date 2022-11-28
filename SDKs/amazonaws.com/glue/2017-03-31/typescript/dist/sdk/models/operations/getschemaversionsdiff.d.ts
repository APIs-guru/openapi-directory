import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchemaVersionsDiffXAmzTargetEnum {
    AwsGlueGetSchemaVersionsDiff = "AWSGlue.GetSchemaVersionsDiff"
}
export declare class GetSchemaVersionsDiffHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaVersionsDiffXAmzTargetEnum;
}
export declare class GetSchemaVersionsDiffRequest extends SpeakeasyBase {
    headers: GetSchemaVersionsDiffHeaders;
    request: shared.GetSchemaVersionsDiffInput;
}
export declare class GetSchemaVersionsDiffResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getSchemaVersionsDiffResponse?: shared.GetSchemaVersionsDiffResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
