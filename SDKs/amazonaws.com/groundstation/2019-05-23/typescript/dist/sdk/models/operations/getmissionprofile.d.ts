import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMissionProfilePathParams extends SpeakeasyBase {
    missionProfileId: string;
}
export declare class GetMissionProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMissionProfileRequest extends SpeakeasyBase {
    pathParams: GetMissionProfilePathParams;
    headers: GetMissionProfileHeaders;
}
export declare class GetMissionProfileResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    getMissionProfileResponse?: shared.GetMissionProfileResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
