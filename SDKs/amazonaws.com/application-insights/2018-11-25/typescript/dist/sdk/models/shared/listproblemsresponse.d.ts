import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Problem } from "./problem";
export declare class ListProblemsResponse extends SpeakeasyBase {
    nextToken?: string;
    problemList?: Problem[];
}
