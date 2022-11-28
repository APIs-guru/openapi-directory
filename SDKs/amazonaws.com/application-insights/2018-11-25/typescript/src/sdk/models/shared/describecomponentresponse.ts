import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponent } from "./applicationcomponent";



export class DescribeComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationComponent" })
  applicationComponent?: ApplicationComponent;

  @SpeakeasyMetadata({ data: "json, name=ResourceList" })
  resourceList?: string[];
}
