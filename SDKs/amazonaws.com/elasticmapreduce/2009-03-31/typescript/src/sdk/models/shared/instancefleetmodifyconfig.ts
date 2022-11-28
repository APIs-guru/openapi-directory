import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceFleetModifyConfig
/** 
 * <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetModifyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId: string;

  @SpeakeasyMetadata({ data: "json, name=TargetOnDemandCapacity" })
  targetOnDemandCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetSpotCapacity" })
  targetSpotCapacity?: number;
}
