import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDimensionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
