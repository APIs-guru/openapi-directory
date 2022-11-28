import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DistributionIdList
/** 
 * A list of distribution IDs.
**/
export class DistributionIdList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
