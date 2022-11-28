import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidationSummary
/** 
 * A summary of an invalidation request.
**/
export class InvalidationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime: Date;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  status: string;
}
