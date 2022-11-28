import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the virtual interface failover test.
**/
export declare class VirtualInterfaceTestHistory extends SpeakeasyBase {
    bgpPeers?: string[];
    endTime?: Date;
    ownerAccount?: string;
    startTime?: Date;
    status?: string;
    testDurationInMinutes?: number;
    testId?: string;
    virtualInterfaceId?: string;
}
