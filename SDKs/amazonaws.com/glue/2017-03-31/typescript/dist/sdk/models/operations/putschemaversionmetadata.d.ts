import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutSchemaVersionMetadataXAmzTargetEnum {
    AwsGluePutSchemaVersionMetadata = "AWSGlue.PutSchemaVersionMetadata"
}
export declare class PutSchemaVersionMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSchemaVersionMetadataXAmzTargetEnum;
}
export declare class PutSchemaVersionMetadataRequest extends SpeakeasyBase {
    headers: PutSchemaVersionMetadataHeaders;
    request: shared.PutSchemaVersionMetadataInput;
}
export declare class PutSchemaVersionMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    alreadyExistsException?: any;
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    putSchemaVersionMetadataResponse?: shared.PutSchemaVersionMetadataResponse;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
