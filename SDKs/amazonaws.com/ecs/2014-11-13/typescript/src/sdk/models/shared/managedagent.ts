import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";


// ManagedAgent
/** 
 * Details about the managed agent status for the container.
**/
export class ManagedAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastStartedAt" })
  lastStartedAt?: Date;

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @Metadata({ data: "json, name=name" })
  name?: ManagedAgentNameEnum;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
