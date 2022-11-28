import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SparkSubmitJobDriver } from "./sparksubmitjobdriver";



// JobDriver
/** 
 * Specify the driver that the job runs on.
**/
export class JobDriver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sparkSubmitJobDriver" })
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
}
