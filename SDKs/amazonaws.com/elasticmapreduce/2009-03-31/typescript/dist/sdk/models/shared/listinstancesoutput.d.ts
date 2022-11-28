import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * This output contains the list of instances.
**/
export declare class ListInstancesOutput extends SpeakeasyBase {
    instances?: Instance[];
    marker?: string;
}
