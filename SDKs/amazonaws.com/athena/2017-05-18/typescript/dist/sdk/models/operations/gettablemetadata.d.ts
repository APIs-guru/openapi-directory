import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTableMetadataXAmzTargetEnum {
    AmazonAthenaGetTableMetadata = "AmazonAthena.GetTableMetadata"
}
export declare class GetTableMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTableMetadataXAmzTargetEnum;
}
export declare class GetTableMetadataRequest extends SpeakeasyBase {
    headers: GetTableMetadataHeaders;
    request: shared.GetTableMetadataInput;
}
export declare class GetTableMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getTableMetadataOutput?: shared.GetTableMetadataOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    metadataException?: any;
    statusCode: number;
}
