import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that adds information from the IoT Device Shadow service to a message.
**/
export declare class DeviceShadowEnrichActivity extends SpeakeasyBase {
    attribute: string;
    name: string;
    next?: string;
    roleArn: string;
    thingName: string;
}
