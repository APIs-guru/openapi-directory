import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackEventEnum } from "./autorollbackeventenum";



// AutoRollbackConfiguration
/** 
 * Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
**/
export class AutoRollbackConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: AutoRollbackEventEnum[];
}
