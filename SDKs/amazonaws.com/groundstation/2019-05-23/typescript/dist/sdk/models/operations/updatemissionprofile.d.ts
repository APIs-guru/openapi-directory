import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateMissionProfilePathParams extends SpeakeasyBase {
    missionProfileId: string;
}
export declare class UpdateMissionProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMissionProfileRequestBody extends SpeakeasyBase {
    contactPostPassDurationSeconds?: number;
    contactPrePassDurationSeconds?: number;
    dataflowEdges?: string[][];
    minimumViableContactDurationSeconds?: number;
    name?: string;
    trackingConfigArn?: string;
}
export declare class UpdateMissionProfileRequest extends SpeakeasyBase {
    pathParams: UpdateMissionProfilePathParams;
    headers: UpdateMissionProfileHeaders;
    request: UpdateMissionProfileRequestBody;
}
export declare class UpdateMissionProfileResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    missionProfileIdResponse?: shared.MissionProfileIdResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
