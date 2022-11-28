import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeCapacityStatus
/** 
 * Describes the capacity status for a fleet.
**/
export class ComputeCapacityStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=Desired" })
  desired: number;

  @SpeakeasyMetadata({ data: "json, name=InUse" })
  inUse?: number;

  @SpeakeasyMetadata({ data: "json, name=Running" })
  running?: number;
}
