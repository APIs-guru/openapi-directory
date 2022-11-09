import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
