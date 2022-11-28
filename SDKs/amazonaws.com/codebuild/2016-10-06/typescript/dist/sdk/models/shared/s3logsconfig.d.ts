import { SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";
/**
 *  Information about S3 logs for a build project.
**/
export declare class S3LogsConfig extends SpeakeasyBase {
    bucketOwnerAccess?: BucketOwnerAccessEnum;
    encryptionDisabled?: boolean;
    location?: string;
    status: LogsConfigStatusTypeEnum;
}
