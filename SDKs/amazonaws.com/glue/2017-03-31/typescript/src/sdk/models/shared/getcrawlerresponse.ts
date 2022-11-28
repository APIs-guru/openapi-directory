import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";



export class GetCrawlerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Crawler" })
  crawler?: Crawler;
}
