import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPublicKeysRequest
/** 
 * Requests the public keys for a specified time range.
**/
export class ListPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
