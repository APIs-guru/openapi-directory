import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditNotificationTarget
/** 
 * Information about the targets to which audit notifications are sent.
**/
export class AuditNotificationTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
