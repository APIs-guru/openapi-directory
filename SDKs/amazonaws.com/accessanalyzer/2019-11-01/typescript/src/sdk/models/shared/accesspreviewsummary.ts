import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";



// AccessPreviewSummary
/** 
 * Contains a summary of information about an access preview.
**/
export class AccessPreviewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AccessPreviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: AccessPreviewStatusReason;
}
