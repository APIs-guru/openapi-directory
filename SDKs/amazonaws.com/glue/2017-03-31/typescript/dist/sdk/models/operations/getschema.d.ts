import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchemaXAmzTargetEnum {
    AwsGlueGetSchema = "AWSGlue.GetSchema"
}
export declare class GetSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaXAmzTargetEnum;
}
export declare class GetSchemaRequest extends SpeakeasyBase {
    headers: GetSchemaHeaders;
    request: shared.GetSchemaInput;
}
export declare class GetSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getSchemaResponse?: shared.GetSchemaResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
