import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateArchiveRequest extends SpeakeasyBase {
    archiveName: string;
    description?: string;
    eventPattern?: string;
    eventSourceArn: string;
    retentionDays?: number;
}
