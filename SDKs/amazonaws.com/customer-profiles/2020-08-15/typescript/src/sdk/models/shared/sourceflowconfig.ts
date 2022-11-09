import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceConnectorTypeEnum } from "./sourceconnectortypeenum";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";


// SourceFlowConfig
/** 
 * Contains information about the configuration of the source connector used in the flow.
**/
export class SourceFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=ConnectorType" })
  connectorType: SourceConnectorTypeEnum;

  @Metadata({ data: "json, name=IncrementalPullConfig" })
  incrementalPullConfig?: IncrementalPullConfig;

  @Metadata({ data: "json, name=SourceConnectorProperties" })
  sourceConnectorProperties: SourceConnectorProperties;
}
