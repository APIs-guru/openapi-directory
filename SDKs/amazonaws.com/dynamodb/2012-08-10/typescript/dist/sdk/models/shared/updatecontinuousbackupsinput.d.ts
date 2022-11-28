import { SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoverySpecification } from "./pointintimerecoveryspecification";
export declare class UpdateContinuousBackupsInput extends SpeakeasyBase {
    pointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
    tableName: string;
}
