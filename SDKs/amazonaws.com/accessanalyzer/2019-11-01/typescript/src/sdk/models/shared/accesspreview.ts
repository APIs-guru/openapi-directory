import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";



// AccessPreview
/** 
 * Contains information about an access preview.
**/
export class AccessPreview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @SpeakeasyMetadata({ data: "json, name=configurations", elemType: Configuration })
  configurations: Map<string, Configuration>;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AccessPreviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: AccessPreviewStatusReason;
}
