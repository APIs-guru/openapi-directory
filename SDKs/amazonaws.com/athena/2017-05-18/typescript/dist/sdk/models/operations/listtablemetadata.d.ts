import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTableMetadataQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTableMetadataXAmzTargetEnum {
    AmazonAthenaListTableMetadata = "AmazonAthena.ListTableMetadata"
}
export declare class ListTableMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTableMetadataXAmzTargetEnum;
}
export declare class ListTableMetadataRequest extends SpeakeasyBase {
    queryParams: ListTableMetadataQueryParams;
    headers: ListTableMetadataHeaders;
    request: shared.ListTableMetadataInput;
}
export declare class ListTableMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listTableMetadataOutput?: shared.ListTableMetadataOutput;
    metadataException?: any;
    statusCode: number;
}
