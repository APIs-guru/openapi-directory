import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSummary } from "./projectsummary";
export declare class ListProjectsResult extends SpeakeasyBase {
    nextToken?: string;
    projects: ProjectSummary[];
}
