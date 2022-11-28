import { SpeakeasyBase } from "../../../internal/utils";
import { ChronologicalOrderEnum } from "./chronologicalorderenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The input for the <a>GetResourceConfigHistory</a> action.
**/
export declare class GetResourceConfigHistoryRequest extends SpeakeasyBase {
    chronologicalOrder?: ChronologicalOrderEnum;
    earlierTime?: Date;
    laterTime?: Date;
    limit?: number;
    nextToken?: string;
    resourceId: string;
    resourceType: ResourceTypeEnum;
}
