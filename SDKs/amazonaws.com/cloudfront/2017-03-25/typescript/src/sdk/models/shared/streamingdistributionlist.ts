import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionSummary } from "./streamingdistributionsummary";



// StreamingDistributionList
/** 
 * A streaming distribution list. 
**/
export class StreamingDistributionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: StreamingDistributionSummary })
  items?: StreamingDistributionSummary[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
