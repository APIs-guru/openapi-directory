import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
**/
export declare class DisassociateClientDeviceFromCoreDeviceEntry extends SpeakeasyBase {
    thingName: string;
}
