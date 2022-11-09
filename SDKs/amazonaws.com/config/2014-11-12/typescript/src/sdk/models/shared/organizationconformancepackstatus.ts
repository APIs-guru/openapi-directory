import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationResourceStatusEnum } from "./organizationresourcestatusenum";


// OrganizationConformancePackStatus
/** 
 * Returns the status for an organization conformance pack in an organization.
**/
export class OrganizationConformancePackStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;

  @Metadata({ data: "json, name=Status" })
  status: OrganizationResourceStatusEnum;
}
