import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecuteCommandLogConfiguration } from "./executecommandlogconfiguration";
import { ExecuteCommandLoggingEnum } from "./executecommandloggingenum";


// ExecuteCommandConfiguration
/** 
 * The details of the execute command configuration.
**/
export class ExecuteCommandConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=logConfiguration" })
  logConfiguration?: ExecuteCommandLogConfiguration;

  @Metadata({ data: "json, name=logging" })
  logging?: ExecuteCommandLoggingEnum;
}
