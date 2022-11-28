import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSchemaXAmzTargetEnum {
    AwsGlueUpdateSchema = "AWSGlue.UpdateSchema"
}
export declare class UpdateSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSchemaXAmzTargetEnum;
}
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    headers: UpdateSchemaHeaders;
    request: shared.UpdateSchemaInput;
}
export declare class UpdateSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
    updateSchemaResponse?: shared.UpdateSchemaResponse;
}
