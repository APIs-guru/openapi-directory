import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HadoopStepConfig
/** 
 * A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
**/
export class HadoopStepConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: string[];

  @Metadata({ data: "json, name=Jar" })
  jar?: string;

  @Metadata({ data: "json, name=MainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;
}
