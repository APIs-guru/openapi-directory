import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscoverPollEndpointXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DiscoverPollEndpoint = "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"
}
export declare class DiscoverPollEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverPollEndpointXAmzTargetEnum;
}
export declare class DiscoverPollEndpointRequest extends SpeakeasyBase {
    headers: DiscoverPollEndpointHeaders;
    request: shared.DiscoverPollEndpointRequest;
}
export declare class DiscoverPollEndpointResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    discoverPollEndpointResponse?: shared.DiscoverPollEndpointResponse;
    serverException?: any;
    statusCode: number;
}
