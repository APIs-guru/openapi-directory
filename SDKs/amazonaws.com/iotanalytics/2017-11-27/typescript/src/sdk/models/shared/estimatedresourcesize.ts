import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EstimatedResourceSize
/** 
 * The estimated size of the resource.
**/
export class EstimatedResourceSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedOn" })
  estimatedOn?: Date;

  @Metadata({ data: "json, name=estimatedSizeInBytes" })
  estimatedSizeInBytes?: number;
}
