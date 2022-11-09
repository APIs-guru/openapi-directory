import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
export declare class DisassociateClientDeviceFromCoreDeviceErrorEntry extends SpeakeasyBase {
    code?: string;
    message?: string;
    thingName?: string;
}
