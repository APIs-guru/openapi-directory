import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



export class UpdateProjectOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
