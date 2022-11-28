import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OperatorNormalizationOptionEnum {
    Basic = "basic"
}


export class OperatorNormalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: OperatorNormalizationOptionEnum;
}
