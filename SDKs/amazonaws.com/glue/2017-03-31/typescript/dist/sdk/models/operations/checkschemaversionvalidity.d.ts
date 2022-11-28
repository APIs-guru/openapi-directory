import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckSchemaVersionValidityXAmzTargetEnum {
    AwsGlueCheckSchemaVersionValidity = "AWSGlue.CheckSchemaVersionValidity"
}
export declare class CheckSchemaVersionValidityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckSchemaVersionValidityXAmzTargetEnum;
}
export declare class CheckSchemaVersionValidityRequest extends SpeakeasyBase {
    headers: CheckSchemaVersionValidityHeaders;
    request: shared.CheckSchemaVersionValidityInput;
}
export declare class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    checkSchemaVersionValidityResponse?: shared.CheckSchemaVersionValidityResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
