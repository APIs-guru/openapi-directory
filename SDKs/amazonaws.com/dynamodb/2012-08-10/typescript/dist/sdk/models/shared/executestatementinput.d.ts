import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
export declare class ExecuteStatementInput extends SpeakeasyBase {
    consistentRead?: boolean;
    nextToken?: string;
    parameters?: AttributeValue[];
    statement: string;
}
