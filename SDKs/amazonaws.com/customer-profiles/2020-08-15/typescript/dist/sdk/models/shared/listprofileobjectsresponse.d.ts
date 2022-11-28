import { SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectsItem } from "./listprofileobjectsitem";
export declare class ListProfileObjectsResponse extends SpeakeasyBase {
    items?: ListProfileObjectsItem[];
    nextToken?: string;
}
