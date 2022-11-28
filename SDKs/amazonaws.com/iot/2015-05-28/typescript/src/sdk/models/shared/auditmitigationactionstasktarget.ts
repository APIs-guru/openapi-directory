import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditMitigationActionsTaskTarget
/** 
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export class AuditMitigationActionsTaskTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditCheckToReasonCodeFilter" })
  auditCheckToReasonCodeFilter?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=auditTaskId" })
  auditTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=findingIds" })
  findingIds?: string[];
}
