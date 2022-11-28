import { SpeakeasyBase } from "../../../internal/utils";
import { FieldContentTypeEnum } from "./fieldcontenttypeenum";
/**
 * Represents a field in a ProfileObjectType.
**/
export declare class ObjectTypeField extends SpeakeasyBase {
    contentType?: FieldContentTypeEnum;
    source?: string;
    target?: string;
}
