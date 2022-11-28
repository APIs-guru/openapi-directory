import { SpeakeasyBase } from "../../../internal/utils";
import { AuditTaskMetadata } from "./audittaskmetadata";
export declare class ListAuditTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: AuditTaskMetadata[];
}
