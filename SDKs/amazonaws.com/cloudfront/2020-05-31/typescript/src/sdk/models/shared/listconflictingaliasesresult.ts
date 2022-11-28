import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictingAliasesList } from "./conflictingaliaseslist";



export class ListConflictingAliasesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingAliasesList?: ConflictingAliasesList;
}
