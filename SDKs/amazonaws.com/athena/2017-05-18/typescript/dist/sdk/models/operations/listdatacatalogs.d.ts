import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDataCatalogsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDataCatalogsXAmzTargetEnum {
    AmazonAthenaListDataCatalogs = "AmazonAthena.ListDataCatalogs"
}
export declare class ListDataCatalogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDataCatalogsXAmzTargetEnum;
}
export declare class ListDataCatalogsRequest extends SpeakeasyBase {
    queryParams: ListDataCatalogsQueryParams;
    headers: ListDataCatalogsHeaders;
    request: shared.ListDataCatalogsInput;
}
export declare class ListDataCatalogsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listDataCatalogsOutput?: shared.ListDataCatalogsOutput;
    statusCode: number;
}
