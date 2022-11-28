import { SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";
/**
 * TagResourceRequest
**/
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceArn: string;
    tags: TagListEntry[];
}
