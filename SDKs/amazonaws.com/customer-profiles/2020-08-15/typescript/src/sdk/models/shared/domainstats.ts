import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainStats
/** 
 * Usage-specific statistics about the domain.
**/
export class DomainStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeteringProfileCount" })
  meteringProfileCount?: number;

  @Metadata({ data: "json, name=ObjectCount" })
  objectCount?: number;

  @Metadata({ data: "json, name=ProfileCount" })
  profileCount?: number;

  @Metadata({ data: "json, name=TotalSize" })
  totalSize?: number;
}
