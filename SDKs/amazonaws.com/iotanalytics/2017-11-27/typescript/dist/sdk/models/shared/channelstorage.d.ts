import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedChannelS3Storage } from "./customermanagedchannels3storage";
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export declare class ChannelStorage extends SpeakeasyBase {
    customerManagedS3?: CustomerManagedChannelS3Storage;
    serviceManagedS3?: Map<string, any>;
}
