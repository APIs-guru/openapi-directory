import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryLimits
/** 
 * Contains directory limit information for a Region.
**/
export class DirectoryLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesCurrentCount" })
  cloudOnlyDirectoriesCurrentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesLimit" })
  cloudOnlyDirectoriesLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesLimitReached" })
  cloudOnlyDirectoriesLimitReached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADCurrentCount" })
  cloudOnlyMicrosoftAdCurrentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADLimit" })
  cloudOnlyMicrosoftAdLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADLimitReached" })
  cloudOnlyMicrosoftAdLimitReached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesCurrentCount" })
  connectedDirectoriesCurrentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesLimit" })
  connectedDirectoriesLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesLimitReached" })
  connectedDirectoriesLimitReached?: boolean;
}
