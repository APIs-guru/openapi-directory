import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatorDbt } from "./operatordbt";
import { OperatorNormalization } from "./operatornormalization";
import { OperatorTypeEnum } from "./operatortypeenum";



export class OperatorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dbt" })
  dbt?: OperatorDbt;

  @SpeakeasyMetadata({ data: "json, name=normalization" })
  normalization?: OperatorNormalization;

  @SpeakeasyMetadata({ data: "json, name=operatorType" })
  operatorType: OperatorTypeEnum;
}
