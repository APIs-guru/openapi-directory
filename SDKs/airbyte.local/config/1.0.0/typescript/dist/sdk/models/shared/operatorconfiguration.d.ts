import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorDbt } from "./operatordbt";
import { OperatorNormalization } from "./operatornormalization";
import { OperatorTypeEnum } from "./operatortypeenum";
export declare class OperatorConfiguration extends SpeakeasyBase {
    dbt?: OperatorDbt;
    normalization?: OperatorNormalization;
    operatorType: OperatorTypeEnum;
}
