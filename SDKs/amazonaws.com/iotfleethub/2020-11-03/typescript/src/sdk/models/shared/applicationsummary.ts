import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStateEnum } from "./applicationstateenum";



// ApplicationSummary
/** 
 * <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
**/
export class ApplicationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationCreationDate" })
  applicationCreationDate?: number;

  @SpeakeasyMetadata({ data: "json, name=applicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=applicationLastUpdateDate" })
  applicationLastUpdateDate?: number;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=applicationState" })
  applicationState?: ApplicationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=applicationUrl" })
  applicationUrl: string;
}
