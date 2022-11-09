import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionRevision
/** 
 * Represents information about the version (or revision) of an action.
**/
export class ActionRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: Date;

  @Metadata({ data: "json, name=revisionChangeId" })
  revisionChangeId: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
