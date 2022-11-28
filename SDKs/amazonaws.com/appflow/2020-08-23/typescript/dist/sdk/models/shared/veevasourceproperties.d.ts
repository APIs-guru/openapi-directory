import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The properties that are applied when using Veeva as a flow source.
**/
export declare class VeevaSourceProperties extends SpeakeasyBase {
    documentType?: string;
    includeAllVersions?: boolean;
    includeRenditions?: boolean;
    includeSourceFiles?: boolean;
    object: string;
}
