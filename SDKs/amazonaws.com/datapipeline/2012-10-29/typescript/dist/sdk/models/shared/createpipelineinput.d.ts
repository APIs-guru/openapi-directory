import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * Contains the parameters for CreatePipeline.
**/
export declare class CreatePipelineInput extends SpeakeasyBase {
    description?: string;
    name: string;
    tags?: Tag[];
    uniqueId: string;
}
