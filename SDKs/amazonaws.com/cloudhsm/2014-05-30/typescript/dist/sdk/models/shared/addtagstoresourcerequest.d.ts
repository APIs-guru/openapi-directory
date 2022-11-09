import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    resourceArn: string;
    tagList: Tag[];
}
