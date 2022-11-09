import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputSummary } from "./inputsummary";
export declare class ListInputsResponse extends SpeakeasyBase {
    inputSummaries?: InputSummary[];
    nextToken?: string;
}
