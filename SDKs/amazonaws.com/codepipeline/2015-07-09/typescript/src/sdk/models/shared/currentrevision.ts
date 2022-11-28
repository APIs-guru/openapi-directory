import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CurrentRevision
/** 
 * Represents information about a current revision.
**/
export class CurrentRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeIdentifier" })
  changeIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: string;

  @SpeakeasyMetadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;
}
