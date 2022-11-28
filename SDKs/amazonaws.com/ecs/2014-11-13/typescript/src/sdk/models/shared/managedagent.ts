import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";



// ManagedAgent
/** 
 * Details about the managed agent status for the container.
**/
export class ManagedAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastStartedAt" })
  lastStartedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ManagedAgentNameEnum;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
