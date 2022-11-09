import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTag } from "./resourcetag";
/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export declare class ListTagsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceTagList?: ResourceTag[];
}
