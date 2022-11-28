import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";



// SourceFlowConfig
/** 
 *  Contains information about the configuration of the source connector used in the flow. 
**/
export class SourceFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorType" })
  connectorType: ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=incrementalPullConfig" })
  incrementalPullConfig?: IncrementalPullConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceConnectorProperties" })
  sourceConnectorProperties: SourceConnectorProperties;
}
