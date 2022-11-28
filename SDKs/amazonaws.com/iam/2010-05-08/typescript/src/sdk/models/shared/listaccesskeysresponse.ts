import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyMetadata } from "./accesskeymetadata";



// ListAccessKeysResponse
/** 
 * Contains the response to a successful <a>ListAccessKeys</a> request. 
**/
export class ListAccessKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccessKeyMetadata })
  accessKeyMetadata: AccessKeyMetadata[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
