import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogTargetConfiguration } from "./logtargetconfiguration";


export class ListV2LoggingLevelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logTargetConfigurations", elemType: shared.LogTargetConfiguration })
  logTargetConfigurations?: LogTargetConfiguration[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
