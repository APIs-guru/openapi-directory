import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class GetMissionProfileResponse extends SpeakeasyBase {
    contactPostPassDurationSeconds?: number;
    contactPrePassDurationSeconds?: number;
    dataflowEdges?: string[][];
    minimumViableContactDurationSeconds?: number;
    missionProfileArn?: string;
    missionProfileId?: string;
    name?: string;
    region?: string;
    tags?: Map<string, string>;
    trackingConfigArn?: string;
}
