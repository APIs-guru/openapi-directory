import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectBadge
/** 
 * Information about the build badge for the build project.
**/
export class ProjectBadge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeEnabled" })
  badgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=badgeRequestUrl" })
  badgeRequestUrl?: string;
}
