import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateImageBuilderStreamingUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity?: number;
}
