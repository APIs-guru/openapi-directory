import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogTargetConfiguration } from "./logtargetconfiguration";



export class ListV2LoggingLevelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logTargetConfigurations", elemType: LogTargetConfiguration })
  logTargetConfigurations?: LogTargetConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
