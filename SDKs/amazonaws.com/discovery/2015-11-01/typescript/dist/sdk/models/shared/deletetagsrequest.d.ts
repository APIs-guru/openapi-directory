import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class DeleteTagsRequest extends SpeakeasyBase {
    configurationIds: string[];
    tags?: Tag[];
}
