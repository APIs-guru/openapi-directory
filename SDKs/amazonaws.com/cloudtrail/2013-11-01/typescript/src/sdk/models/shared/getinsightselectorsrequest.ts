import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInsightSelectorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrailName" })
  trailName: string;
}
