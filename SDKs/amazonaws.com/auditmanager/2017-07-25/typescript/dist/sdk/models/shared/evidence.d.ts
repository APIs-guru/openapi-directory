import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 *  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot.
**/
export declare class Evidence extends SpeakeasyBase {
    assessmentReportSelection?: string;
    attributes?: Map<string, string>;
    awsAccountId?: string;
    awsOrganization?: string;
    complianceCheck?: string;
    dataSource?: string;
    eventName?: string;
    eventSource?: string;
    evidenceAwsAccountId?: string;
    evidenceByType?: string;
    evidenceFolderId?: string;
    iamId?: string;
    id?: string;
    resourcesIncluded?: Resource[];
    time?: Date;
}
