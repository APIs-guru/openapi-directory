import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCrawlerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
