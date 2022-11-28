import { SpeakeasyBase } from "../../../internal/utils";
import { TaskDefinitionFamilyStatusEnum } from "./taskdefinitionfamilystatusenum";
export declare class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
    familyPrefix?: string;
    maxResults?: number;
    nextToken?: string;
    status?: TaskDefinitionFamilyStatusEnum;
}
