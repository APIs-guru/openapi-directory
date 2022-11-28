import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppSpecContent
/** 
 *  A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. 
**/
export class AppSpecContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;
}
