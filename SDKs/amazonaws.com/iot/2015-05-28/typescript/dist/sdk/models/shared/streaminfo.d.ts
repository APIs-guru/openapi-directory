import { SpeakeasyBase } from "../../../internal/utils";
import { StreamFile } from "./streamfile";
/**
 * Information about a stream.
**/
export declare class StreamInfo extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    files?: StreamFile[];
    lastUpdatedAt?: Date;
    roleArn?: string;
    streamArn?: string;
    streamId?: string;
    streamVersion?: number;
}
