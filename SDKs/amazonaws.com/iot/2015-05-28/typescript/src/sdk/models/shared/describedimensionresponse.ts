import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";


export class DescribeDimensionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stringValues" })
  stringValues?: string[];

  @Metadata({ data: "json, name=type" })
  type?: DimensionTypeEnum;
}
