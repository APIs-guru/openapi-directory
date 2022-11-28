import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// Evidence
/** 
 *  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot. 
**/
export class Evidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReportSelection" })
  assessmentReportSelection?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsOrganization" })
  awsOrganization?: string;

  @SpeakeasyMetadata({ data: "json, name=complianceCheck" })
  complianceCheck?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceAwsAccountId" })
  evidenceAwsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceByType" })
  evidenceByType?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=iamId" })
  iamId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesIncluded", elemType: Resource })
  resourcesIncluded?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}
