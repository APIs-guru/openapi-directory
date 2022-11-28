import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDimensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
