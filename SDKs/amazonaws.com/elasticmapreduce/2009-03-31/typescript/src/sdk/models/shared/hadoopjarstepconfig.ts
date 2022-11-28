import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValue } from "./keyvalue";



// HadoopJarStepConfig
/** 
 * A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
**/
export class HadoopJarStepConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=Jar" })
  jar: string;

  @SpeakeasyMetadata({ data: "json, name=MainClass" })
  mainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties", elemType: KeyValue })
  properties?: KeyValue[];
}
