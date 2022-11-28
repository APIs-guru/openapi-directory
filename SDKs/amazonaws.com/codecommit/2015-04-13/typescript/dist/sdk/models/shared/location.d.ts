import { SpeakeasyBase } from "../../../internal/utils";
import { RelativeFileVersionEnumEnum } from "./relativefileversionenumenum";
/**
 * Returns information about the location of a change or comment in the comparison between two commits or a pull request.
**/
export declare class Location extends SpeakeasyBase {
    filePath?: string;
    filePosition?: number;
    relativeFileVersion?: RelativeFileVersionEnumEnum;
}
