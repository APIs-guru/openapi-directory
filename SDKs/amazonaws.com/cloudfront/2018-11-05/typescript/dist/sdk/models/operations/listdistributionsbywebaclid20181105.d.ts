import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributionsByWebAclId20181105PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20181105QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20181105Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20181105PathParams;
    queryParams: ListDistributionsByWebAclId20181105QueryParams;
    headers: ListDistributionsByWebAclId20181105Headers;
}
export declare class ListDistributionsByWebAclId20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
