import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the <code>AccessLog</code> attribute.
**/
export declare class AccessLog extends SpeakeasyBase {
    emitInterval?: number;
    enabled: boolean;
    s3BucketName?: string;
    s3BucketPrefix?: string;
}
