import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTrailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
