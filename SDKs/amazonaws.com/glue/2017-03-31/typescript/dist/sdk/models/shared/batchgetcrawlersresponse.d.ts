import { SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";
export declare class BatchGetCrawlersResponse extends SpeakeasyBase {
    crawlers?: Crawler[];
    crawlersNotFound?: string[];
}
