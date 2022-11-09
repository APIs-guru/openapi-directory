import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListDistributionsByKeyGroup20200531PathParams extends SpeakeasyBase {
    keyGroupId: string;
}
export declare class ListDistributionsByKeyGroup20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByKeyGroup20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByKeyGroup20200531Request extends SpeakeasyBase {
    pathParams: ListDistributionsByKeyGroup20200531PathParams;
    queryParams: ListDistributionsByKeyGroup20200531QueryParams;
    headers: ListDistributionsByKeyGroup20200531Headers;
}
export declare class ListDistributionsByKeyGroup20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
