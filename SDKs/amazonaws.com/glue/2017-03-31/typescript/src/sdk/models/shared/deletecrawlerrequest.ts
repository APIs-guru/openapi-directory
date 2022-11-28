import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCrawlerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
