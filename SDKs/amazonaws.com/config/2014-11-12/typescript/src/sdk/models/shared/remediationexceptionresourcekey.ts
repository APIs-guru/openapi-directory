import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemediationExceptionResourceKey
/** 
 * The details that identify a resource within Config, including the resource type and resource ID. 
**/
export class RemediationExceptionResourceKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
