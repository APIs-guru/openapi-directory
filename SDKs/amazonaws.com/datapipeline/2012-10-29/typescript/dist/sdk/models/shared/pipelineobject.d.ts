import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
**/
export declare class PipelineObject extends SpeakeasyBase {
    fields: Field[];
    id: string;
    name: string;
}
