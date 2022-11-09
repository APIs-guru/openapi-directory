import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.
**/
export declare class Field extends SpeakeasyBase {
    key: string;
    refValue?: string;
    stringValue?: string;
}
