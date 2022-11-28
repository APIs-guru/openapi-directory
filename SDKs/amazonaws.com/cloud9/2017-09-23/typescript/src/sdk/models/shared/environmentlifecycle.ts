import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLifecycleStatusEnum } from "./environmentlifecyclestatusenum";



// EnvironmentLifecycle
/** 
 * Information about the current creation or deletion lifecycle state of an Cloud9 development environment.
**/
export class EnvironmentLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureResource" })
  failureResource?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EnvironmentLifecycleStatusEnum;
}
