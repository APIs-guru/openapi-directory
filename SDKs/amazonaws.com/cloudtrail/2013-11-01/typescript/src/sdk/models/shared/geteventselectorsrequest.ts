import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEventSelectorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrailName" })
  trailName: string;
}
