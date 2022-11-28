import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";



export class UpdateDimensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValues" })
  stringValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DimensionTypeEnum;
}
