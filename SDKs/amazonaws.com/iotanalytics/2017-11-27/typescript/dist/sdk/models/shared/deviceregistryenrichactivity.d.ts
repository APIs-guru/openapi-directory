import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that adds data from the IoT device registry to your message.
**/
export declare class DeviceRegistryEnrichActivity extends SpeakeasyBase {
    attribute: string;
    name: string;
    next?: string;
    roleArn: string;
    thingName: string;
}
