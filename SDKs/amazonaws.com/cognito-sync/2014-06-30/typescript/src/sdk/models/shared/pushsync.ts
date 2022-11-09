import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PushSync
/** 
 * Configuration options to be applied to the identity pool.
**/
export class PushSync extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationArns" })
  applicationArns?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
