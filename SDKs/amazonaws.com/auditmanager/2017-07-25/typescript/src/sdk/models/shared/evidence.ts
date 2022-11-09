import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// Evidence
/** 
 *  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot. 
**/
export class Evidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReportSelection" })
  assessmentReportSelection?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=awsOrganization" })
  awsOrganization?: string;

  @Metadata({ data: "json, name=complianceCheck" })
  complianceCheck?: string;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName?: string;

  @Metadata({ data: "json, name=eventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=evidenceAwsAccountId" })
  evidenceAwsAccountId?: string;

  @Metadata({ data: "json, name=evidenceByType" })
  evidenceByType?: string;

  @Metadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId?: string;

  @Metadata({ data: "json, name=iamId" })
  iamId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resourcesIncluded", elemType: shared.Resource })
  resourcesIncluded?: Resource[];

  @Metadata({ data: "json, name=time" })
  time?: Date;
}
