import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
**/
export declare class ThingTypeMetadata extends SpeakeasyBase {
    creationDate?: Date;
    deprecated?: boolean;
    deprecationDate?: Date;
}
