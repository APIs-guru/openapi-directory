import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId?: string;
}
