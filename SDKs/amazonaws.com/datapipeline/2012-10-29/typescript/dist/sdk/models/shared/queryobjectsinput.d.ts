import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";
/**
 * Contains the parameters for QueryObjects.
**/
export declare class QueryObjectsInput extends SpeakeasyBase {
    limit?: number;
    marker?: string;
    pipelineId: string;
    query?: Query;
    sphere: string;
}
