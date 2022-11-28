import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionRevision
/** 
 * Represents information about the version (or revision) of an action.
**/
export class ActionRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=revisionChangeId" })
  revisionChangeId: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
