import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListDistributionsByWebAclId20190326PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20190326Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20190326PathParams;
    queryParams: ListDistributionsByWebAclId20190326QueryParams;
    headers: ListDistributionsByWebAclId20190326Headers;
}
export declare class ListDistributionsByWebAclId20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
