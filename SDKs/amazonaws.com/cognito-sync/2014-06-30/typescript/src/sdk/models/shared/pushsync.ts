import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PushSync
/** 
 * Configuration options to be applied to the identity pool.
**/
export class PushSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationArns" })
  applicationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
