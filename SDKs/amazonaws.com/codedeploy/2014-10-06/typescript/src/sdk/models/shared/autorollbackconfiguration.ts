import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRollbackEventEnum } from "./autorollbackeventenum";


// AutoRollbackConfiguration
/** 
 * Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
**/
export class AutoRollbackConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=events" })
  events?: AutoRollbackEventEnum[];
}
