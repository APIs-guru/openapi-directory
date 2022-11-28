import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePlacementPathParams extends SpeakeasyBase {
    placementName: string;
    projectName: string;
}
export declare class DescribePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribePlacementRequest extends SpeakeasyBase {
    pathParams: DescribePlacementPathParams;
    headers: DescribePlacementHeaders;
}
export declare class DescribePlacementResponse extends SpeakeasyBase {
    contentType: string;
    describePlacementResponse?: shared.DescribePlacementResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
