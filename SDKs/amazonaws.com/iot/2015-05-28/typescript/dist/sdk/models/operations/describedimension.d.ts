import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDimensionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DescribeDimensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDimensionRequest extends SpeakeasyBase {
    pathParams: DescribeDimensionPathParams;
    headers: DescribeDimensionHeaders;
}
export declare class DescribeDimensionResponse extends SpeakeasyBase {
    contentType: string;
    describeDimensionResponse?: shared.DescribeDimensionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
