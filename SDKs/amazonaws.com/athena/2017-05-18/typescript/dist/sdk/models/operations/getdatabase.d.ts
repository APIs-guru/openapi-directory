import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDatabaseXAmzTargetEnum {
    AmazonAthenaGetDatabase = "AmazonAthena.GetDatabase"
}
export declare class GetDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDatabaseXAmzTargetEnum;
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    headers: GetDatabaseHeaders;
    request: shared.GetDatabaseInput;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    getDatabaseOutput?: shared.GetDatabaseOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    metadataException?: any;
    statusCode: number;
}
