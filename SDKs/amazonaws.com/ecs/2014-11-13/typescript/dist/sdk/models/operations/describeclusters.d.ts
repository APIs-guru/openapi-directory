import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeClustersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeClusters = "AmazonEC2ContainerServiceV20141113.DescribeClusters"
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
    clientException?: any;
    contentType: string;
    describeClustersResponse?: shared.DescribeClustersResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
