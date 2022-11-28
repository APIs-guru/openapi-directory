import { SpeakeasyBase } from "../../../internal/utils";
import { Problem } from "./problem";
export declare class ListProblemsResponse extends SpeakeasyBase {
    nextToken?: string;
    problemList?: Problem[];
}
