import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeClustersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeClustersXAmzTargetEnum {
    BaldrApiServiceDescribeClusters = "BaldrApiService.DescribeClusters"
}
export declare class DescribeClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClustersXAmzTargetEnum;
}
export declare class DescribeClustersRequest extends SpeakeasyBase {
    queryParams: DescribeClustersQueryParams;
    headers: DescribeClustersHeaders;
    request: shared.DescribeClustersRequest;
}
export declare class DescribeClustersResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmServiceException?: any;
    cloudHsmTagException?: any;
    contentType: string;
    describeClustersResponse?: shared.DescribeClustersResponse;
    statusCode: number;
}
