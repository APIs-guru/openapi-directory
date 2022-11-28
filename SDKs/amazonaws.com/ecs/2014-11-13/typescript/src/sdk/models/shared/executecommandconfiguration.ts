import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecuteCommandLogConfiguration } from "./executecommandlogconfiguration";
import { ExecuteCommandLoggingEnum } from "./executecommandloggingenum";



// ExecuteCommandConfiguration
/** 
 * The details of the execute command configuration.
**/
export class ExecuteCommandConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=logConfiguration" })
  logConfiguration?: ExecuteCommandLogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: ExecuteCommandLoggingEnum;
}
