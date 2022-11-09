import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Grant } from "./grant";
import { CannedAclEnum } from "./cannedaclenum";
import { Encryption } from "./encryption";
import { StorageClassEnum } from "./storageclassenum";
/**
 * Contains information about the location in Amazon S3 where the select job results are stored.
**/
export declare class S3Location extends SpeakeasyBase {
    accessControlList?: Grant[];
    bucketName?: string;
    cannedAcl?: CannedAclEnum;
    encryption?: Encryption;
    prefix?: string;
    storageClass?: StorageClassEnum;
    tagging?: Map<string, string>;
    userMetadata?: Map<string, string>;
}
