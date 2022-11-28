import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";



export class ListProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectSummary })
  projects: ProjectSummary[];
}
