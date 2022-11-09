import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSummary
/** 
 * Information about the metadata for a project.
**/
export class ProjectSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
