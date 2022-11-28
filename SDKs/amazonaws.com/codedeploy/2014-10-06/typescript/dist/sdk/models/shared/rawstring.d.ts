import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.
**/
export declare class RawString extends SpeakeasyBase {
    content?: string;
    sha256?: string;
}
