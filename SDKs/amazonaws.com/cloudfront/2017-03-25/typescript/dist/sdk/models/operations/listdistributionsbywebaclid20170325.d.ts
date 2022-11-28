import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributionsByWebAclId20170325PathParams extends SpeakeasyBase {
    webAclId: string;
}
export declare class ListDistributionsByWebAclId20170325QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByWebAclId20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByWebAclId20170325Request extends SpeakeasyBase {
    pathParams: ListDistributionsByWebAclId20170325PathParams;
    queryParams: ListDistributionsByWebAclId20170325QueryParams;
    headers: ListDistributionsByWebAclId20170325Headers;
}
export declare class ListDistributionsByWebAclId20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
