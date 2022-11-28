import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceFieldEnum } from "./containerinstancefieldenum";
export declare class DescribeContainerInstancesRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstances: string[];
    include?: ContainerInstanceFieldEnum[];
}
