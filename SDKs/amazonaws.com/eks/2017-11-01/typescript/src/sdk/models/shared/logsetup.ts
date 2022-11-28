import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogTypeEnum } from "./logtypeenum";



// LogSetup
/** 
 * An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
**/
export class LogSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: LogTypeEnum[];
}
