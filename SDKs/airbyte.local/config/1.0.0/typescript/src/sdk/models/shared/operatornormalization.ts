import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OperatorNormalizationOptionEnum {
    Basic = "basic"
}


export class OperatorNormalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: OperatorNormalizationOptionEnum;
}
