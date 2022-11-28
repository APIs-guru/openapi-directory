import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
/**
 * Represents the output of a <a>ListObjectAttributes</a> response operation.
**/
export declare class BatchListObjectAttributesResponse extends SpeakeasyBase {
    attributes?: AttributeKeyAndValue[];
    nextToken?: string;
}
