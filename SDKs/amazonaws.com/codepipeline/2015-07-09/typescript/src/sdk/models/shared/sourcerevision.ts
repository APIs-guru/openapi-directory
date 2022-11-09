import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceRevision
/** 
 * Information about the version (or revision) of a source artifact that initiated a pipeline execution.
**/
export class SourceRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;

  @Metadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
