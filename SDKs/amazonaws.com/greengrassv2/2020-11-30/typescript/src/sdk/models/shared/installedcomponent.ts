import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstalledComponentLifecycleStateEnum } from "./installedcomponentlifecyclestateenum";



// InstalledComponent
/** 
 * Contains information about a component on a Greengrass core device.
**/
export class InstalledComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: InstalledComponentLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=lifecycleStateDetails" })
  lifecycleStateDetails?: string;
}
