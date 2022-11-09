import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopResourceXAmzTargetEnum {
    AmazonForecastStopResource = "AmazonForecast.StopResource"
}
export declare class StopResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopResourceXAmzTargetEnum;
}
export declare class StopResourceRequest extends SpeakeasyBase {
    headers: StopResourceHeaders;
    request: shared.StopResourceRequest;
}
export declare class StopResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
