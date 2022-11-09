import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentLifecycleStatusEnum } from "./environmentlifecyclestatusenum";


// EnvironmentLifecycle
/** 
 * Information about the current creation or deletion lifecycle state of an Cloud9 development environment.
**/
export class EnvironmentLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureResource" })
  failureResource?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: EnvironmentLifecycleStatusEnum;
}
