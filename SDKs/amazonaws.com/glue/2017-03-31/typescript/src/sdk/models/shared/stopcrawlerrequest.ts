import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopCrawlerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
