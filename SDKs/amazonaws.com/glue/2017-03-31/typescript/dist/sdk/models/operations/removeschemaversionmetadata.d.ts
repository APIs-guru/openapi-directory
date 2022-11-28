import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveSchemaVersionMetadataXAmzTargetEnum {
    AwsGlueRemoveSchemaVersionMetadata = "AWSGlue.RemoveSchemaVersionMetadata"
}
export declare class RemoveSchemaVersionMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveSchemaVersionMetadataXAmzTargetEnum;
}
export declare class RemoveSchemaVersionMetadataRequest extends SpeakeasyBase {
    headers: RemoveSchemaVersionMetadataHeaders;
    request: shared.RemoveSchemaVersionMetadataInput;
}
export declare class RemoveSchemaVersionMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    removeSchemaVersionMetadataResponse?: shared.RemoveSchemaVersionMetadataResponse;
    statusCode: number;
}
