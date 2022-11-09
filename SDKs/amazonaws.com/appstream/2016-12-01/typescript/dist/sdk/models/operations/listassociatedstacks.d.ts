import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAssociatedStacksXAmzTargetEnum {
    PhotonAdminProxyServiceListAssociatedStacks = "PhotonAdminProxyService.ListAssociatedStacks"
}
export declare class ListAssociatedStacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociatedStacksXAmzTargetEnum;
}
export declare class ListAssociatedStacksRequest extends SpeakeasyBase {
    headers: ListAssociatedStacksHeaders;
    request: shared.ListAssociatedStacksRequest;
}
export declare class ListAssociatedStacksResponse extends SpeakeasyBase {
    contentType: string;
    listAssociatedStacksResult?: shared.ListAssociatedStacksResult;
    statusCode: number;
}
