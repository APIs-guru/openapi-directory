import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MitigationActionIdentifier
/** 
 * Information that identifies a mitigation action. This information is returned by ListMitigationActions.
**/
export class MitigationActionIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;
}
