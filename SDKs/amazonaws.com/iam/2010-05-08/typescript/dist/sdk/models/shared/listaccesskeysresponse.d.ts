import { SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyMetadata } from "./accesskeymetadata";
/**
 * Contains the response to a successful <a>ListAccessKeys</a> request.
**/
export declare class ListAccessKeysResponse extends SpeakeasyBase {
    accessKeyMetadata: AccessKeyMetadata[];
    isTruncated?: boolean;
    marker?: string;
}
