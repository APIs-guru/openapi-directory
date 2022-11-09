import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PolicyVersion
/** 
 * Describes a policy version.
**/
export class PolicyVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}
