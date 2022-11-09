import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpRoute } from "./iproute";
export declare class AddIpRoutesRequest extends SpeakeasyBase {
    directoryId: string;
    ipRoutes: IpRoute[];
    updateSecurityGroupForDirectoryControllers?: boolean;
}
