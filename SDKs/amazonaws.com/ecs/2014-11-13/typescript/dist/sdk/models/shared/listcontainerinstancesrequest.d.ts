import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";
export declare class ListContainerInstancesRequest extends SpeakeasyBase {
    cluster?: string;
    filter?: string;
    maxResults?: number;
    nextToken?: string;
    status?: ContainerInstanceStatusEnum;
}
