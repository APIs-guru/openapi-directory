import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceRevision
/** 
 * Information about the version (or revision) of a source artifact that initiated a pipeline execution.
**/
export class SourceRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
