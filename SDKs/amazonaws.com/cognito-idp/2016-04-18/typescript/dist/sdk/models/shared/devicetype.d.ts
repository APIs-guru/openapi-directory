import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
/**
 * The device type.
**/
export declare class DeviceType extends SpeakeasyBase {
    deviceAttributes?: AttributeType[];
    deviceCreateDate?: Date;
    deviceKey?: string;
    deviceLastAuthenticatedDate?: Date;
    deviceLastModifiedDate?: Date;
}
