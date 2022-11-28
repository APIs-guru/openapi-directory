import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridProject } from "./testgridproject";



export class UpdateTestGridProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testGridProject" })
  testGridProject?: TestGridProject;
}
