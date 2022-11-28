import { SpeakeasyBase } from "../../../internal/utils";
import { Archive } from "./archive";
export declare class ListArchivesResponse extends SpeakeasyBase {
    archives?: Archive[];
    nextToken?: string;
}
