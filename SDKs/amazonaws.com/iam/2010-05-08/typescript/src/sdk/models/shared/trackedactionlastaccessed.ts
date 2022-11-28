import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackedActionLastAccessed
/** 
 * <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
export class TrackedActionLastAccessed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionName?: string;

  @SpeakeasyMetadata()
  lastAccessedEntity?: string;

  @SpeakeasyMetadata()
  lastAccessedRegion?: string;

  @SpeakeasyMetadata()
  lastAccessedTime?: Date;
}
