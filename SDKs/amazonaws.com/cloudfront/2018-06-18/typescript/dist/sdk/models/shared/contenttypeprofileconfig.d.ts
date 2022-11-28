import { SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfiles } from "./contenttypeprofiles";
/**
 * The configuration for a field-level encryption content type-profile mapping.
**/
export declare class ContentTypeProfileConfig extends SpeakeasyBase {
    contentTypeProfiles?: ContentTypeProfiles;
    forwardWhenContentTypeIsUnknown: boolean;
}
