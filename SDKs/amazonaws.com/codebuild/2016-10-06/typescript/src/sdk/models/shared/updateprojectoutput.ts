import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Project } from "./project";


export class UpdateProjectOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: Project;
}
