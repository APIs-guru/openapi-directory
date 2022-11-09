import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiPagedResponseMetadata
/** 
 * Metadata for the paged response
**/
export class ApiPagedResponseMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit: number;

  @Metadata({ data: "json, name=Offset" })
  offset: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount: number;
}
