import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
