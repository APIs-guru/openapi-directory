import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputePlatformEnum } from "./computeplatformenum";


// ApplicationInfo
/** 
 * Information about an application.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=gitHubAccountName" })
  gitHubAccountName?: string;

  @Metadata({ data: "json, name=linkedToGitHub" })
  linkedToGitHub?: boolean;
}
