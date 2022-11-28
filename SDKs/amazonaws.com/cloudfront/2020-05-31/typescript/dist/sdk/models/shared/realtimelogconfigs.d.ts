import { SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfig } from "./realtimelogconfig";
/**
 * A list of real-time log configurations.
**/
export declare class RealtimeLogConfigs extends SpeakeasyBase {
    isTruncated: boolean;
    items?: RealtimeLogConfig[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
}
