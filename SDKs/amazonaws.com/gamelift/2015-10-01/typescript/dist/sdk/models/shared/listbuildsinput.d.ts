import { SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnum } from "./buildstatusenum";
/**
 * Represents the input for a request operation.
**/
export declare class ListBuildsInput extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
    status?: BuildStatusEnum;
}
