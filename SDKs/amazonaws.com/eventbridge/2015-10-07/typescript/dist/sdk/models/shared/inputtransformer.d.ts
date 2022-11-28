import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
**/
export declare class InputTransformer extends SpeakeasyBase {
    inputPathsMap?: Map<string, string>;
    inputTemplate: string;
}
