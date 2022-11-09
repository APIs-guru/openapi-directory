import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PointInTimeRecoverySpecification
/** 
 * Represents the settings used to enable point in time recovery.
**/
export class PointInTimeRecoverySpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=PointInTimeRecoveryEnabled" })
  pointInTimeRecoveryEnabled: boolean;
}
