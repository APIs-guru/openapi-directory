import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Crawler } from "./crawler";


export class GetCrawlerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Crawler" })
  crawler?: Crawler;
}
