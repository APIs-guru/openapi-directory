import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestGridProject } from "./testgridproject";


export class ListTestGridProjectsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=testGridProjects", elemType: shared.TestGridProject })
  testGridProjects?: TestGridProject[];
}
