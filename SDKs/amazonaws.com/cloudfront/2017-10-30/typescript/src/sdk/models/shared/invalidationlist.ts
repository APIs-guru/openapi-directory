import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvalidationSummary } from "./invalidationsummary";



// InvalidationList
/** 
 * The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
export class InvalidationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: InvalidationSummary })
  items?: InvalidationSummary[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
