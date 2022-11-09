import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValue } from "./keyvalue";


// HadoopJarStepConfig
/** 
 * A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
**/
export class HadoopJarStepConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: string[];

  @Metadata({ data: "json, name=Jar" })
  jar: string;

  @Metadata({ data: "json, name=MainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=Properties", elemType: shared.KeyValue })
  properties?: KeyValue[];
}
