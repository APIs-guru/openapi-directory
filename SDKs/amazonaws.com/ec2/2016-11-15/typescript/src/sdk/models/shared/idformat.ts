import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdFormat
/** 
 * Describes the ID format for a resource.
**/
export class IdFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deadline?: Date;

  @SpeakeasyMetadata()
  resource?: string;

  @SpeakeasyMetadata()
  useLongIds?: boolean;
}
