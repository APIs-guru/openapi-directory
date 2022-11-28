import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class ListAliasesOutput extends SpeakeasyBase {
    aliases?: Alias[];
    nextToken?: string;
}
