import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCrawlerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
