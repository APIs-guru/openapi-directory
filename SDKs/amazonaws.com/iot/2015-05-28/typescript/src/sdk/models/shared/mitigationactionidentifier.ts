import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MitigationActionIdentifier
/** 
 * Information that identifies a mitigation action. This information is returned by ListMitigationActions.
**/
export class MitigationActionIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionArn" })
  actionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;
}
