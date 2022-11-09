import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationComponent } from "./applicationcomponent";


export class DescribeComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationComponent" })
  applicationComponent?: ApplicationComponent;

  @Metadata({ data: "json, name=ResourceList" })
  resourceList?: string[];
}
