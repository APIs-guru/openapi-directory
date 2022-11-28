import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { Tag } from "./tag";
/**
 * Contains pipeline metadata.
**/
export declare class PipelineDescription extends SpeakeasyBase {
    description?: string;
    fields: Field[];
    name: string;
    pipelineId: string;
    tags?: Tag[];
}
