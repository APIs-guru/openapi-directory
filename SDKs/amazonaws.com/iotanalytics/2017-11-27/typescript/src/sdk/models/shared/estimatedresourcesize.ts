import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EstimatedResourceSize
/** 
 * The estimated size of the resource.
**/
export class EstimatedResourceSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedOn" })
  estimatedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=estimatedSizeInBytes" })
  estimatedSizeInBytes?: number;
}
