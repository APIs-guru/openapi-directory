import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemediationExceptionResourceKey
/** 
 * The details that identify a resource within Config, including the resource type and resource ID. 
**/
export class RemediationExceptionResourceKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
