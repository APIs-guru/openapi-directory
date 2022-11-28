import { SpeakeasyBase } from "../../../internal/utils";
import { CannedAccessControlListEnum } from "./cannedaccesscontrollistenum";
/**
 * Describes an action to write data to an Amazon S3 bucket.
**/
export declare class S3Action extends SpeakeasyBase {
    bucketName: string;
    cannedAcl?: CannedAccessControlListEnum;
    key: string;
    roleArn: string;
}
