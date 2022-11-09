import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";


// OrganizationConformancePackDetailedStatus
/** 
 * Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed. 
**/
export class OrganizationConformancePackDetailedStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status: OrganizationResourceDetailedStatusEnum;
}
