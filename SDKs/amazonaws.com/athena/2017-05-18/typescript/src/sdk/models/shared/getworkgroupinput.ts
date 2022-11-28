import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
