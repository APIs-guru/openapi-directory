import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";


// AccessPreviewSummary
/** 
 * Contains a summary of information about an access preview.
**/
export class AccessPreviewSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: AccessPreviewStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: AccessPreviewStatusReason;
}
