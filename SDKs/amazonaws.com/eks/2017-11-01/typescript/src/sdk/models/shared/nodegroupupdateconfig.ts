import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodegroupUpdateConfig
/** 
 * The node group update configuration.
**/
export class NodegroupUpdateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @SpeakeasyMetadata({ data: "json, name=maxUnavailablePercentage" })
  maxUnavailablePercentage?: number;
}
