import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPublicKeysRequest
/** 
 * Requests the public keys for a specified time range.
**/
export class ListPublicKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
