import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditNotificationTarget
/** 
 * Information about the targets to which audit notifications are sent.
**/
export class AuditNotificationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
