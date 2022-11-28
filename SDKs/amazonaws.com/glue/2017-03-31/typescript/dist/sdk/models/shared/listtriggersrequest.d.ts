import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTriggersRequest extends SpeakeasyBase {
    dependentJobName?: string;
    maxResults?: number;
    nextToken?: string;
    tags?: Map<string, string>;
}
