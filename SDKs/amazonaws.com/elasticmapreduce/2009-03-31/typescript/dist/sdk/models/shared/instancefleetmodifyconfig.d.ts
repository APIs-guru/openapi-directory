import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export declare class InstanceFleetModifyConfig extends SpeakeasyBase {
    instanceFleetId: string;
    targetOnDemandCapacity?: number;
    targetSpotCapacity?: number;
}
