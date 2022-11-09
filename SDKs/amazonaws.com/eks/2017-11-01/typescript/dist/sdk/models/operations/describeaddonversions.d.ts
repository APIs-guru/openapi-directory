import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAddonVersionsQueryParams extends SpeakeasyBase {
    addonName?: string;
    kubernetesVersion?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeAddonVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAddonVersionsRequest extends SpeakeasyBase {
    queryParams: DescribeAddonVersionsQueryParams;
    headers: DescribeAddonVersionsHeaders;
}
export declare class DescribeAddonVersionsResponse extends SpeakeasyBase {
    contentType: string;
    describeAddonVersionsResponse?: shared.DescribeAddonVersionsResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
