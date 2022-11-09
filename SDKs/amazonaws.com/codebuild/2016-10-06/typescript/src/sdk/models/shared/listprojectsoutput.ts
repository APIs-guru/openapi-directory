import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListProjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projects" })
  projects?: string[];
}
