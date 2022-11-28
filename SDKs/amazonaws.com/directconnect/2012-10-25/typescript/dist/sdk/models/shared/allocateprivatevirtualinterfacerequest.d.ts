import { SpeakeasyBase } from "../../../internal/utils";
import { NewPrivateVirtualInterfaceAllocation } from "./newprivatevirtualinterfaceallocation";
export declare class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
    connectionId: string;
    newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
    ownerAccount: string;
}
