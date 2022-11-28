import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
**/
export declare class SourceDataMap extends SpeakeasyBase {
    cases?: Map<string, string>;
    defaultValue?: string;
    sourceName: string;
}
