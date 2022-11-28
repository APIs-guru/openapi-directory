import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum QuerySchemaVersionMetadataXAmzTargetEnum {
    AwsGlueQuerySchemaVersionMetadata = "AWSGlue.QuerySchemaVersionMetadata"
}
export declare class QuerySchemaVersionMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QuerySchemaVersionMetadataXAmzTargetEnum;
}
export declare class QuerySchemaVersionMetadataRequest extends SpeakeasyBase {
    headers: QuerySchemaVersionMetadataHeaders;
    request: shared.QuerySchemaVersionMetadataInput;
}
export declare class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    querySchemaVersionMetadataResponse?: shared.QuerySchemaVersionMetadataResponse;
    statusCode: number;
}
