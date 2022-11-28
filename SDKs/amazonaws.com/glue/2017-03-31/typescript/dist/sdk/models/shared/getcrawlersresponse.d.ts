import { SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";
export declare class GetCrawlersResponse extends SpeakeasyBase {
    crawlers?: Crawler[];
    nextToken?: string;
}
