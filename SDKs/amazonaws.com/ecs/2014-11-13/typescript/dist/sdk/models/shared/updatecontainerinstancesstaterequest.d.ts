import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";
export declare class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstances: string[];
    status: ContainerInstanceStatusEnum;
}
