import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";
export declare class DescribeSessionsResult extends SpeakeasyBase {
    nextToken?: string;
    sessions?: Session[];
}
