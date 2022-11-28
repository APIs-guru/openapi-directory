import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";
export declare class ListTestGridSessionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endTimeAfter?: Date;
    endTimeBefore?: Date;
    maxResult?: number;
    nextToken?: string;
    projectArn: string;
    status?: TestGridSessionStatusEnum;
}
