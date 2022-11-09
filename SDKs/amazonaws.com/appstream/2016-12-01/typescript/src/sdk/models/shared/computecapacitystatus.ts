import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeCapacityStatus
/** 
 * Describes the capacity status for a fleet.
**/
export class ComputeCapacityStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=Available" })
  available?: number;

  @Metadata({ data: "json, name=Desired" })
  desired: number;

  @Metadata({ data: "json, name=InUse" })
  inUse?: number;

  @Metadata({ data: "json, name=Running" })
  running?: number;
}
