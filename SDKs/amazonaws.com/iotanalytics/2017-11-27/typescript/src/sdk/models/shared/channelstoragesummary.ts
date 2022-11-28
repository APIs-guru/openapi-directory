import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedChannelS3StorageSummary } from "./customermanagedchannels3storagesummary";



// ChannelStorageSummary
/** 
 * Where channel data is stored.
**/
export class ChannelStorageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
