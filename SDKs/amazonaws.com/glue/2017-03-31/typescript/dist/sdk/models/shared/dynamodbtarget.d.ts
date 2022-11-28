import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon DynamoDB table to crawl.
**/
export declare class DynamoDbTarget extends SpeakeasyBase {
    path?: string;
    scanAll?: boolean;
    scanRate?: number;
}
