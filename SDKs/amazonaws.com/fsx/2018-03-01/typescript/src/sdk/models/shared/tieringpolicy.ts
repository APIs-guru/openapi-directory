import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TieringPolicyNameEnum } from "./tieringpolicynameenum";



// TieringPolicy
/** 
 * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
**/
export class TieringPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CoolingPeriod" })
  coolingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: TieringPolicyNameEnum;
}
