import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
