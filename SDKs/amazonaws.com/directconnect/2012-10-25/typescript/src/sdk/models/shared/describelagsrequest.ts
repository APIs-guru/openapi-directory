import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lagId" })
  lagId?: string;
}
