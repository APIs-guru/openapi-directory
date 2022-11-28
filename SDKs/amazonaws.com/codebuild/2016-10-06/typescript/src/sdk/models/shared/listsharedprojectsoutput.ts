import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSharedProjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: string[];
}
