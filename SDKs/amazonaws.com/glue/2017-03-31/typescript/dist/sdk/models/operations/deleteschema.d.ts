import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSchemaXAmzTargetEnum {
    AwsGlueDeleteSchema = "AWSGlue.DeleteSchema"
}
export declare class DeleteSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSchemaXAmzTargetEnum;
}
export declare class DeleteSchemaRequest extends SpeakeasyBase {
    headers: DeleteSchemaHeaders;
    request: shared.DeleteSchemaInput;
}
export declare class DeleteSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteSchemaResponse?: shared.DeleteSchemaResponse;
    entityNotFoundException?: any;
    invalidInputException?: any;
    statusCode: number;
}
