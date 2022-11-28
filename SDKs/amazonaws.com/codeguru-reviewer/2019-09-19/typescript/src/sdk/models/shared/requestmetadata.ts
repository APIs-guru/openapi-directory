import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { VendorNameEnum } from "./vendornameenum";



// RequestMetadata
/** 
 * Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
**/
export class RequestMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventInfo" })
  eventInfo?: EventInfo;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Requester" })
  requester?: string;

  @SpeakeasyMetadata({ data: "json, name=VendorName" })
  vendorName?: VendorNameEnum;
}
