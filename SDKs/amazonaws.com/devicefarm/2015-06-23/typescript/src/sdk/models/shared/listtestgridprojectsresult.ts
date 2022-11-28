import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridProject } from "./testgridproject";



export class ListTestGridProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testGridProjects", elemType: TestGridProject })
  testGridProjects?: TestGridProject[];
}
