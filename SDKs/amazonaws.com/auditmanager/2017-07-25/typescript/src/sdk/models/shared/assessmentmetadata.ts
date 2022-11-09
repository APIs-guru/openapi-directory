import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { Scope } from "./scope";
import { AssessmentStatusEnum } from "./assessmentstatusenum";


// AssessmentMetadata
/** 
 *  The metadata associated with the specified assessment. 
**/
export class AssessmentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination?: AssessmentReportsDestination;

  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=delegations", elemType: shared.Delegation })
  delegations?: Delegation[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];

  @Metadata({ data: "json, name=scope" })
  scope?: Scope;

  @Metadata({ data: "json, name=status" })
  status?: AssessmentStatusEnum;
}
