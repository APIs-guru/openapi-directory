import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSummary
/** 
 * Information about the metadata for a project.
**/
export class ProjectSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
