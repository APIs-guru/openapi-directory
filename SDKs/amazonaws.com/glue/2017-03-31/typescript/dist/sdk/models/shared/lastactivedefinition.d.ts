import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
**/
export declare class LastActiveDefinition extends SpeakeasyBase {
    blueprintLocation?: string;
    blueprintServiceLocation?: string;
    description?: string;
    lastModifiedOn?: Date;
    parameterSpec?: string;
}
