import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkSubmitJobDriver
/** 
 * The information about job driver for Spark submit.
**/
export class SparkSubmitJobDriver extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryPoint" })
  entryPoint: string;

  @Metadata({ data: "json, name=entryPointArguments" })
  entryPointArguments?: string[];

  @Metadata({ data: "json, name=sparkSubmitParameters" })
  sparkSubmitParameters?: string;
}
