import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.
**/
export declare class AppSpecContent extends SpeakeasyBase {
    content?: string;
    sha256?: string;
}
