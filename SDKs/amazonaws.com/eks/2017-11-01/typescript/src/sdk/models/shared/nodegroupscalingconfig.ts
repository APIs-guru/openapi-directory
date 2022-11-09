import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodegroupScalingConfig
/** 
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export class NodegroupScalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredSize" })
  desiredSize?: number;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=minSize" })
  minSize?: number;
}
