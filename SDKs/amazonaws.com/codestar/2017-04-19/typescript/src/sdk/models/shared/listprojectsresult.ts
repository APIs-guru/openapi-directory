import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectSummary } from "./projectsummary";


export class ListProjectsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.ProjectSummary })
  projects: ProjectSummary[];
}
