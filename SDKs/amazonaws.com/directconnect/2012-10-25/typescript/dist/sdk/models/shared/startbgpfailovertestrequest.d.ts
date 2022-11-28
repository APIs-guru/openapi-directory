import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartBgpFailoverTestRequest extends SpeakeasyBase {
    bgpPeers?: string[];
    testDurationInMinutes?: number;
    virtualInterfaceId: string;
}
