import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementError } from "./batchstatementerror";
import { AttributeValue } from "./attributevalue";
/**
 *  A PartiQL batch statement response..
**/
export declare class BatchStatementResponse extends SpeakeasyBase {
    error?: BatchStatementError;
    item?: Map<string, AttributeValue>;
    tableName?: string;
}
