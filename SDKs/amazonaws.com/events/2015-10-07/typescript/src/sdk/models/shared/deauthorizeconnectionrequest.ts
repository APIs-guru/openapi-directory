import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeauthorizeConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
