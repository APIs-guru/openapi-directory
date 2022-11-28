import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



export class CreateProjectOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
