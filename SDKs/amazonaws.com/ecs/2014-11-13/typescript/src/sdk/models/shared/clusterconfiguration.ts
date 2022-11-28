import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecuteCommandConfiguration } from "./executecommandconfiguration";



// ClusterConfiguration
/** 
 * The execute command configuration for the cluster.
**/
export class ClusterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executeCommandConfiguration" })
  executeCommandConfiguration?: ExecuteCommandConfiguration;
}
