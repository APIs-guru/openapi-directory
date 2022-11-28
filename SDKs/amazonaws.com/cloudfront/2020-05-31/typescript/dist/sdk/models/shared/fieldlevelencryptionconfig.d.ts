import { SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileConfig } from "./contenttypeprofileconfig";
import { QueryArgProfileConfig } from "./queryargprofileconfig";
/**
 * A complex data type that includes the profile configurations specified for field-level encryption.
**/
export declare class FieldLevelEncryptionConfig extends SpeakeasyBase {
    callerReference: string;
    comment?: string;
    contentTypeProfileConfig?: ContentTypeProfileConfig;
    queryArgProfileConfig?: QueryArgProfileConfig;
}
