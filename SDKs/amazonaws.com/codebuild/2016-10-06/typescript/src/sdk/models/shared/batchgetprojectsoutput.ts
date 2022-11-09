import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Project } from "./project";


export class BatchGetProjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=projects", elemType: shared.Project })
  projects?: Project[];

  @Metadata({ data: "json, name=projectsNotFound" })
  projectsNotFound?: string[];
}
