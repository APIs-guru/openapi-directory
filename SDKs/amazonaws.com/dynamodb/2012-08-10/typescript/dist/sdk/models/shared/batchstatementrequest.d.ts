import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 *  A PartiQL batch statement request.
**/
export declare class BatchStatementRequest extends SpeakeasyBase {
    consistentRead?: boolean;
    parameters?: AttributeValue[];
    statement: string;
}
