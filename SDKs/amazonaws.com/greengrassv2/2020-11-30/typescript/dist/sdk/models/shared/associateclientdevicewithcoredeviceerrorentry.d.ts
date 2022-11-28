import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
export declare class AssociateClientDeviceWithCoreDeviceErrorEntry extends SpeakeasyBase {
    code?: string;
    message?: string;
    thingName?: string;
}
