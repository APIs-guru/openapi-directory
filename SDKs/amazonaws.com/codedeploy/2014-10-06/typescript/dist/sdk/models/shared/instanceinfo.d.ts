import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Information about an on-premises instance.
**/
export declare class InstanceInfo extends SpeakeasyBase {
    deregisterTime?: Date;
    iamSessionArn?: string;
    iamUserArn?: string;
    instanceArn?: string;
    instanceName?: string;
    registerTime?: Date;
    tags?: Tag[];
}
