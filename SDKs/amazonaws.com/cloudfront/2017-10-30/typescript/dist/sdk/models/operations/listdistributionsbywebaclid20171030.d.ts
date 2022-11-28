import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributionsByWebAclId20171030PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20171030QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20171030Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20171030PathParams;
    queryParams: ListDistributionsByWebAclId20171030QueryParams;
    headers: ListDistributionsByWebAclId20171030Headers;
}
export declare class ListDistributionsByWebAclId20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
