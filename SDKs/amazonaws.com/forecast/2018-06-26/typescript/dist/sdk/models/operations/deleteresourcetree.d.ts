import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteResourceTreeXAmzTargetEnum {
    AmazonForecastDeleteResourceTree = "AmazonForecast.DeleteResourceTree"
}
export declare class DeleteResourceTreeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceTreeXAmzTargetEnum;
}
export declare class DeleteResourceTreeRequest extends SpeakeasyBase {
    headers: DeleteResourceTreeHeaders;
    request: shared.DeleteResourceTreeRequest;
}
export declare class DeleteResourceTreeResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
