import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMatchBackfillXAmzTargetEnum {
    GameLiftStartMatchBackfill = "GameLift.StartMatchBackfill"
}
export declare class StartMatchBackfillHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMatchBackfillXAmzTargetEnum;
}
export declare class StartMatchBackfillRequest extends SpeakeasyBase {
    headers: StartMatchBackfillHeaders;
    request: shared.StartMatchBackfillInput;
}
export declare class StartMatchBackfillResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    startMatchBackfillOutput?: shared.StartMatchBackfillOutput;
    statusCode: number;
    unsupportedRegionException?: any;
}
