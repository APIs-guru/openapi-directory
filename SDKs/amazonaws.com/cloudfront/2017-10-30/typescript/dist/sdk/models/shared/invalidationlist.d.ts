import { SpeakeasyBase } from "../../../internal/utils";
import { InvalidationSummary } from "./invalidationsummary";
/**
 * The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
export declare class InvalidationList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: InvalidationSummary[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
