import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMissionProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMissionProfileRequestBody extends SpeakeasyBase {
    contactPostPassDurationSeconds?: number;
    contactPrePassDurationSeconds?: number;
    dataflowEdges: string[][];
    minimumViableContactDurationSeconds: number;
    name: string;
    tags?: Map<string, string>;
    trackingConfigArn: string;
}
export declare class CreateMissionProfileRequest extends SpeakeasyBase {
    headers: CreateMissionProfileHeaders;
    request: CreateMissionProfileRequestBody;
}
export declare class CreateMissionProfileResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    missionProfileIdResponse?: shared.MissionProfileIdResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
