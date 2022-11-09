import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PointInTimeRecoverySpecification } from "./pointintimerecoveryspecification";


export class UpdateContinuousBackupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PointInTimeRecoverySpecification" })
  pointInTimeRecoverySpecification: PointInTimeRecoverySpecification;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
