import { SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";
export declare class CreateFlowLogsResult extends SpeakeasyBase {
    clientToken?: string;
    flowLogIds?: string[];
    unsuccessful?: UnsuccessfulItem[];
}
