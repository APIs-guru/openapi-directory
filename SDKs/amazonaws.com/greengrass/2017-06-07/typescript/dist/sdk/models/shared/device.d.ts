import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a device.
**/
export declare class Device extends SpeakeasyBase {
    certificateArn: string;
    id: string;
    syncShadow?: boolean;
    thingArn: string;
}
