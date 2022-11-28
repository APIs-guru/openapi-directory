import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchArrayProperties
/** 
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
**/
export class BatchArrayProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;
}
