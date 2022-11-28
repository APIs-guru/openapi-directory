import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributionsByWebAclId20161125PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20161125QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20161125Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20161125PathParams;
    queryParams: ListDistributionsByWebAclId20161125QueryParams;
    headers: ListDistributionsByWebAclId20161125Headers;
}
export declare class ListDistributionsByWebAclId20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
