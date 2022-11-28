import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



export class BatchGetProjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projects", elemType: Project })
  projects?: Project[];

  @SpeakeasyMetadata({ data: "json, name=projectsNotFound" })
  projectsNotFound?: string[];
}
