import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteMissionProfilePathParams extends SpeakeasyBase {
    missionProfileId: string;
}
export declare class DeleteMissionProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMissionProfileRequest extends SpeakeasyBase {
    pathParams: DeleteMissionProfilePathParams;
    headers: DeleteMissionProfileHeaders;
}
export declare class DeleteMissionProfileResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    missionProfileIdResponse?: shared.MissionProfileIdResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
