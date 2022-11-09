import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecuteCommandConfiguration } from "./executecommandconfiguration";


// ClusterConfiguration
/** 
 * The execute command configuration for the cluster.
**/
export class ClusterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=executeCommandConfiguration" })
  executeCommandConfiguration?: ExecuteCommandConfiguration;
}
