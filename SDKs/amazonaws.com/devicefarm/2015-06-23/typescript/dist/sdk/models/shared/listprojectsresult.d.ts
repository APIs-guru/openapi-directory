import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * Represents the result of a list projects request.
**/
export declare class ListProjectsResult extends SpeakeasyBase {
    nextToken?: string;
    projects?: Project[];
}
