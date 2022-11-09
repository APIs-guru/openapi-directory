import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatorDbt } from "./operatordbt";
import { OperatorNormalization } from "./operatornormalization";
import { OperatorTypeEnum } from "./operatortypeenum";


export class OperatorConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=dbt" })
  dbt?: OperatorDbt;

  @Metadata({ data: "json, name=normalization" })
  normalization?: OperatorNormalization;

  @Metadata({ data: "json, name=operatorType" })
  operatorType: OperatorTypeEnum;
}
