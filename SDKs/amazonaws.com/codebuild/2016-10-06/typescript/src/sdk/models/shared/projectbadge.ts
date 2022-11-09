import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectBadge
/** 
 * Information about the build badge for the build project.
**/
export class ProjectBadge extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeEnabled" })
  badgeEnabled?: boolean;

  @Metadata({ data: "json, name=badgeRequestUrl" })
  badgeRequestUrl?: string;
}
