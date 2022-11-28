import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartCrawlerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
