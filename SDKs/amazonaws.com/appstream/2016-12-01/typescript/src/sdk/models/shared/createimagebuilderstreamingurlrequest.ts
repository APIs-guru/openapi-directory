import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateImageBuilderStreamingUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Validity" })
  validity?: number;
}
