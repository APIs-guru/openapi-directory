import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstalledComponentLifecycleStateEnum } from "./installedcomponentlifecyclestateenum";


// InstalledComponent
/** 
 * Contains information about a component on a Greengrass core device.
**/
export class InstalledComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: InstalledComponentLifecycleStateEnum;

  @Metadata({ data: "json, name=lifecycleStateDetails" })
  lifecycleStateDetails?: string;
}
