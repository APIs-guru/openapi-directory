import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceStatusInfo
/** 
 * Provides a list of status information for an instance.
**/
export class DbInstanceStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  normal?: boolean;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusType?: string;
}
