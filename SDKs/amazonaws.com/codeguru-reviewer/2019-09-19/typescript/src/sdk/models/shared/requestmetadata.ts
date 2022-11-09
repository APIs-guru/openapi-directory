import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventInfo } from "./eventinfo";
import { VendorNameEnum } from "./vendornameenum";


// RequestMetadata
/** 
 * Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
**/
export class RequestMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventInfo" })
  eventInfo?: EventInfo;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Requester" })
  requester?: string;

  @Metadata({ data: "json, name=VendorName" })
  vendorName?: VendorNameEnum;
}
