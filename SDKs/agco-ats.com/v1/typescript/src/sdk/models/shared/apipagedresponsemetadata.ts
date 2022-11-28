import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiPagedResponseMetadata
/** 
 * Metadata for the paged response
**/
export class ApiPagedResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=Offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount: number;
}
