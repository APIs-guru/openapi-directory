import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSharedProjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projects" })
  projects?: string[];
}
