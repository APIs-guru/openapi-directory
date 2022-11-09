import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogTypeEnum } from "./logtypeenum";


// LogSetup
/** 
 * An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
**/
export class LogSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=types" })
  types?: LogTypeEnum[];
}
