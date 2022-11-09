import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppSpecContent
/** 
 *  A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. 
**/
export class AppSpecContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
