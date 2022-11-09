import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridProject } from "./testgridproject";


export class UpdateTestGridProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=testGridProject" })
  testGridProject?: TestGridProject;
}
