import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainStats
/** 
 * Usage-specific statistics about the domain.
**/
export class DomainStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeteringProfileCount" })
  meteringProfileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ObjectCount" })
  objectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ProfileCount" })
  profileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSize" })
  totalSize?: number;
}
