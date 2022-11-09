import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CurrentRevision
/** 
 * Represents information about a current revision.
**/
export class CurrentRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeIdentifier" })
  changeIdentifier: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=revision" })
  revision: string;

  @Metadata({ data: "json, name=revisionSummary" })
  revisionSummary?: string;
}
