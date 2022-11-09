import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SparkSubmitJobDriver } from "./sparksubmitjobdriver";


// JobDriver
/** 
 * Specify the driver that the job runs on.
**/
export class JobDriver extends SpeakeasyBase {
  @Metadata({ data: "json, name=sparkSubmitJobDriver" })
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
}
