import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";


// SourceFlowConfig
/** 
 *  Contains information about the configuration of the source connector used in the flow. 
**/
export class SourceFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType: ConnectorTypeEnum;

  @Metadata({ data: "json, name=incrementalPullConfig" })
  incrementalPullConfig?: IncrementalPullConfig;

  @Metadata({ data: "json, name=sourceConnectorProperties" })
  sourceConnectorProperties: SourceConnectorProperties;
}
