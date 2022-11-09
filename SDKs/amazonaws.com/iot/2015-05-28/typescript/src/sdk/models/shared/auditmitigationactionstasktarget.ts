import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditMitigationActionsTaskTarget
/** 
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export class AuditMitigationActionsTaskTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditCheckToReasonCodeFilter" })
  auditCheckToReasonCodeFilter?: Map<string, string[]>;

  @Metadata({ data: "json, name=auditTaskId" })
  auditTaskId?: string;

  @Metadata({ data: "json, name=findingIds" })
  findingIds?: string[];
}
