import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveViolation } from "./activeviolation";
export declare class ListActiveViolationsResponse extends SpeakeasyBase {
    activeViolations?: ActiveViolation[];
    nextToken?: string;
}
