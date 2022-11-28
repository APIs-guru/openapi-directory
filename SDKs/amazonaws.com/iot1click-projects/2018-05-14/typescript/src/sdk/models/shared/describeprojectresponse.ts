import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectDescription } from "./projectdescription";



export class DescribeProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project: ProjectDescription;
}
