import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceStatusEnum } from "./organizationresourcestatusenum";



// OrganizationConformancePackStatus
/** 
 * Returns the status for an organization conformance pack in an organization.
**/
export class OrganizationConformancePackStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: OrganizationResourceStatusEnum;
}
