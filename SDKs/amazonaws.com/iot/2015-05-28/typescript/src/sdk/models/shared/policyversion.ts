import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyVersion
/** 
 * Describes a policy version.
**/
export class PolicyVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
