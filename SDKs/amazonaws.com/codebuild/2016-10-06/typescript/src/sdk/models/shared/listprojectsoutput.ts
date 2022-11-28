import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListProjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: string[];
}
