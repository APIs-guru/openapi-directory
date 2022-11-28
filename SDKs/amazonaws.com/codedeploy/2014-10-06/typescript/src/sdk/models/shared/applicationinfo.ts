import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";



// ApplicationInfo
/** 
 * Information about an application.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=gitHubAccountName" })
  gitHubAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedToGitHub" })
  linkedToGitHub?: boolean;
}
