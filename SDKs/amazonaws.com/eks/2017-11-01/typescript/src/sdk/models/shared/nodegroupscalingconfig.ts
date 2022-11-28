import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodegroupScalingConfig
/** 
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export class NodegroupScalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredSize" })
  desiredSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=minSize" })
  minSize?: number;
}
