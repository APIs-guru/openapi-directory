import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedChannelS3StorageSummary } from "./customermanagedchannels3storagesummary";
/**
 * Where channel data is stored.
**/
export declare class ChannelStorageSummary extends SpeakeasyBase {
    customerManagedS3?: CustomerManagedChannelS3StorageSummary;
    serviceManagedS3?: Map<string, any>;
}
