import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";
export declare class ListRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    rules?: Rule[];
}
