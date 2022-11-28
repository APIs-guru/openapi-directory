import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkSubmitJobDriver
/** 
 * The information about job driver for Spark submit.
**/
export class SparkSubmitJobDriver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint: string;

  @SpeakeasyMetadata({ data: "json, name=entryPointArguments" })
  entryPointArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=sparkSubmitParameters" })
  sparkSubmitParameters?: string;
}
