import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodegroupUpdateConfig
/** 
 * The node group update configuration.
**/
export class NodegroupUpdateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @Metadata({ data: "json, name=maxUnavailablePercentage" })
  maxUnavailablePercentage?: number;
}
