import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeClustersXAmzTargetEnum {
    AmazonDaxv3DescribeClusters = "AmazonDAXV3.DescribeClusters"
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
    headers: DescribeClustersHeaders;
    request: shared.DescribeClustersRequest;
}
export declare class DescribeClustersResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    describeClustersResponse?: shared.DescribeClustersResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
