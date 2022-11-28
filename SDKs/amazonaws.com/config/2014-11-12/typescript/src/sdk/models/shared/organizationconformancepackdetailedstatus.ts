import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";



// OrganizationConformancePackDetailedStatus
/** 
 * Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed. 
**/
export class OrganizationConformancePackDetailedStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: OrganizationResourceDetailedStatusEnum;
}
