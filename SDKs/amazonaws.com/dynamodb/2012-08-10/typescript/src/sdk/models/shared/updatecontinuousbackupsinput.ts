import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoverySpecification } from "./pointintimerecoveryspecification";



export class UpdateContinuousBackupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PointInTimeRecoverySpecification" })
  pointInTimeRecoverySpecification: PointInTimeRecoverySpecification;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
