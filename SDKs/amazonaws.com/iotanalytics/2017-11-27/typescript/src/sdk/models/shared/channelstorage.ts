import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedChannelS3Storage } from "./customermanagedchannels3storage";



// ChannelStorage
/** 
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export class ChannelStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedChannelS3Storage;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
