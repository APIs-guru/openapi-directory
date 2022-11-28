import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";
export declare class GetProfileObjectTypeResponse extends SpeakeasyBase {
    allowProfileCreation?: boolean;
    createdAt?: Date;
    description: string;
    encryptionKey?: string;
    expirationDays?: number;
    fields?: Map<string, ObjectTypeField>;
    keys?: Map<string, ObjectTypeKey[]>;
    lastUpdatedAt?: Date;
    objectTypeName: string;
    tags?: Map<string, string>;
    templateId?: string;
}
