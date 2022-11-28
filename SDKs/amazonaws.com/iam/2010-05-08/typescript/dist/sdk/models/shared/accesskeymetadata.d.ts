import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
**/
export declare class AccessKeyMetadata extends SpeakeasyBase {
    accessKeyId?: string;
    createDate?: Date;
    status?: StatusTypeEnum;
    userName?: string;
}
