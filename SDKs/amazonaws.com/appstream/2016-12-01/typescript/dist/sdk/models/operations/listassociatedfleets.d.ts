import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAssociatedFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceListAssociatedFleets = "PhotonAdminProxyService.ListAssociatedFleets"
}
export declare class ListAssociatedFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociatedFleetsXAmzTargetEnum;
}
export declare class ListAssociatedFleetsRequest extends SpeakeasyBase {
    headers: ListAssociatedFleetsHeaders;
    request: shared.ListAssociatedFleetsRequest;
}
export declare class ListAssociatedFleetsResponse extends SpeakeasyBase {
    contentType: string;
    listAssociatedFleetsResult?: shared.ListAssociatedFleetsResult;
    statusCode: number;
}
