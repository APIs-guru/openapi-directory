import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceConnectorTypeEnum } from "./sourceconnectortypeenum";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";



// SourceFlowConfig
/** 
 * Contains information about the configuration of the source connector used in the flow.
**/
export class SourceFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorProfileName" })
  connectorProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectorType" })
  connectorType: SourceConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalPullConfig" })
  incrementalPullConfig?: IncrementalPullConfig;

  @SpeakeasyMetadata({ data: "json, name=SourceConnectorProperties" })
  sourceConnectorProperties: SourceConnectorProperties;
}
