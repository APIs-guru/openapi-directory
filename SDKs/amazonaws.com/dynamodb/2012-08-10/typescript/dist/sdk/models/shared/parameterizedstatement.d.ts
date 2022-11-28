import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 *  Represents a PartiQL statment that uses parameters.
**/
export declare class ParameterizedStatement extends SpeakeasyBase {
    parameters?: AttributeValue[];
    statement: string;
}
