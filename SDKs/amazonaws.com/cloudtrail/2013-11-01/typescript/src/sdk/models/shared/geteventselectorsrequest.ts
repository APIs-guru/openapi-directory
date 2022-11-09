import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEventSelectorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrailName" })
  trailName: string;
}
