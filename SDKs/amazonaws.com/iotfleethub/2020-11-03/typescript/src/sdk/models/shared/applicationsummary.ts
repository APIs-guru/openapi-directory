import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStateEnum } from "./applicationstateenum";


// ApplicationSummary
/** 
 * <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
**/
export class ApplicationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationCreationDate" })
  applicationCreationDate?: number;

  @Metadata({ data: "json, name=applicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=applicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=applicationLastUpdateDate" })
  applicationLastUpdateDate?: number;

  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=applicationState" })
  applicationState?: ApplicationStateEnum;

  @Metadata({ data: "json, name=applicationUrl" })
  applicationUrl: string;
}
