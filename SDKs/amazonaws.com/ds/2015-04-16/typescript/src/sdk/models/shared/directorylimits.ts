import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryLimits
/** 
 * Contains directory limit information for a Region.
**/
export class DirectoryLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudOnlyDirectoriesCurrentCount" })
  cloudOnlyDirectoriesCurrentCount?: number;

  @Metadata({ data: "json, name=CloudOnlyDirectoriesLimit" })
  cloudOnlyDirectoriesLimit?: number;

  @Metadata({ data: "json, name=CloudOnlyDirectoriesLimitReached" })
  cloudOnlyDirectoriesLimitReached?: boolean;

  @Metadata({ data: "json, name=CloudOnlyMicrosoftADCurrentCount" })
  cloudOnlyMicrosoftAdCurrentCount?: number;

  @Metadata({ data: "json, name=CloudOnlyMicrosoftADLimit" })
  cloudOnlyMicrosoftAdLimit?: number;

  @Metadata({ data: "json, name=CloudOnlyMicrosoftADLimitReached" })
  cloudOnlyMicrosoftAdLimitReached?: boolean;

  @Metadata({ data: "json, name=ConnectedDirectoriesCurrentCount" })
  connectedDirectoriesCurrentCount?: number;

  @Metadata({ data: "json, name=ConnectedDirectoriesLimit" })
  connectedDirectoriesLimit?: number;

  @Metadata({ data: "json, name=ConnectedDirectoriesLimitReached" })
  connectedDirectoriesLimitReached?: boolean;
}
