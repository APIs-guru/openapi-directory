import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogPattern } from "./logpattern";
export declare class ListLogPatternsResponse extends SpeakeasyBase {
    logPatterns?: LogPattern[];
    nextToken?: string;
    resourceGroupName?: string;
}
