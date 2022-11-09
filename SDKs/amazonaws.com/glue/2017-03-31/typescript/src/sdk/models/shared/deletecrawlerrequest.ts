import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCrawlerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
