import { SpeakeasyBase } from "../../../internal/utils";
import { OtaUpdateSummary } from "./otaupdatesummary";
export declare class ListOtaUpdatesResponse extends SpeakeasyBase {
    nextToken?: string;
    otaUpdates?: OtaUpdateSummary[];
}
