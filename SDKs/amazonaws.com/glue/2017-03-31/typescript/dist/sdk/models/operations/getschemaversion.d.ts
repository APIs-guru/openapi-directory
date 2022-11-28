import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchemaVersionXAmzTargetEnum {
    AwsGlueGetSchemaVersion = "AWSGlue.GetSchemaVersion"
}
export declare class GetSchemaVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaVersionXAmzTargetEnum;
}
export declare class GetSchemaVersionRequest extends SpeakeasyBase {
    headers: GetSchemaVersionHeaders;
    request: shared.GetSchemaVersionInput;
}
export declare class GetSchemaVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getSchemaVersionResponse?: shared.GetSchemaVersionResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
