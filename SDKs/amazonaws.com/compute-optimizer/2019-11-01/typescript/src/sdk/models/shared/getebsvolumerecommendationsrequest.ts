import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsFilter } from "./ebsfilter";



export class GetEbsVolumeRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: EbsFilter })
  filters?: EbsFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeArns" })
  volumeArns?: string[];
}
