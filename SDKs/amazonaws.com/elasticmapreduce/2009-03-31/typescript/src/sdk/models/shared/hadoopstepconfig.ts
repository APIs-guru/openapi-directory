import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HadoopStepConfig
/** 
 * A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
**/
export class HadoopStepConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=Jar" })
  jar?: string;

  @SpeakeasyMetadata({ data: "json, name=MainClass" })
  mainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;
}
