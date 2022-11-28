import { SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";
/**
 * Represents an application source.
**/
export declare class ApplicationSource extends SpeakeasyBase {
    cloudFormationStackArn?: string;
    tagFilters?: TagFilter[];
}
