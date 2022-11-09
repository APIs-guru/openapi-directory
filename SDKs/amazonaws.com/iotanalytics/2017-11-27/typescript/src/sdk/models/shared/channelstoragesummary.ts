import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedChannelS3StorageSummary } from "./customermanagedchannels3storagesummary";


// ChannelStorageSummary
/** 
 * Where channel data is stored.
**/
export class ChannelStorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;

  @Metadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
