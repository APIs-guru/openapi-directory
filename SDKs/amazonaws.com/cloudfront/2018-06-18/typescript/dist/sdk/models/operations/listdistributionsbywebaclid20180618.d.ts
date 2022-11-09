import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListDistributionsByWebAclId20180618PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20180618QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20180618Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20180618PathParams;
    queryParams: ListDistributionsByWebAclId20180618QueryParams;
    headers: ListDistributionsByWebAclId20180618Headers;
}
export declare class ListDistributionsByWebAclId20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
