import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArtifactRevision
/** 
 * Represents revision details of an artifact. 
**/
export class ArtifactRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionChangeIdentifier" })
  revisionChangeIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUrl" })
  revisionUrl?: string;
}
