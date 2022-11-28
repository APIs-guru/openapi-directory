import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";
export declare class GetProfileObjectTypeTemplateResponse extends SpeakeasyBase {
    allowProfileCreation?: boolean;
    fields?: Map<string, ObjectTypeField>;
    keys?: Map<string, ObjectTypeKey[]>;
    sourceName?: string;
    sourceObject?: string;
    templateId?: string;
}
