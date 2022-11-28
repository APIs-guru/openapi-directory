import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentFileTypeEnum } from "./environmentfiletypeenum";



// EnvironmentFile
/** 
 * <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information on the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they are processed from the top down. It is recommended to use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This field is only valid for containers in Fargate tasks that use platform version <code>1.4.0</code> or later.</p>
**/
export class EnvironmentFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EnvironmentFileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
