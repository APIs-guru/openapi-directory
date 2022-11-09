import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArtifactRevision
/** 
 * Represents revision details of an artifact. 
**/
export class ArtifactRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revisionChangeIdentifier" })
  revisionChangeIdentifier?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;

  @Metadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
