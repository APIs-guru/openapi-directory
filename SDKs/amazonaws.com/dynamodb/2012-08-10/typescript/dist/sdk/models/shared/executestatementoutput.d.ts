import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
export declare class ExecuteStatementOutput extends SpeakeasyBase {
    items?: Map<string, AttributeValue>[];
    nextToken?: string;
}
