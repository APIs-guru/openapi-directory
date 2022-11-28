import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PointInTimeRecoverySpecification
/** 
 * Represents the settings used to enable point in time recovery.
**/
export class PointInTimeRecoverySpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PointInTimeRecoveryEnabled" })
  pointInTimeRecoveryEnabled: boolean;
}
