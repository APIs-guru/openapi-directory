import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";


// AccessPreview
/** 
 * Contains information about an access preview.
**/
export class AccessPreview extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=configurations", elemType: shared.Configuration })
  configurations: Map<string, Configuration>;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: AccessPreviewStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: AccessPreviewStatusReason;
}
