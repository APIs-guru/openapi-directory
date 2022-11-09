import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopImageBuilderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
