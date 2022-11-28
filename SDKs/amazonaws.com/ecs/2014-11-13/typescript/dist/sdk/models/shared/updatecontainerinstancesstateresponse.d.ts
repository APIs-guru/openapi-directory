import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstance } from "./containerinstance";
import { Failure } from "./failure";
export declare class UpdateContainerInstancesStateResponse extends SpeakeasyBase {
    containerInstances?: ContainerInstance[];
    failures?: Failure[];
}
