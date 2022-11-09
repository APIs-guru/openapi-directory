import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectDescription } from "./projectdescription";


export class DescribeProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project: ProjectDescription;
}
