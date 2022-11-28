import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { KeySchemaElement } from "./keyschemaelement";
import { ProvisionedThroughput } from "./provisionedthroughput";
/**
 * Contains the details of the table when the backup was created.
**/
export declare class SourceTableDetails extends SpeakeasyBase {
    billingMode?: BillingModeEnum;
    itemCount?: number;
    keySchema: KeySchemaElement[];
    provisionedThroughput: ProvisionedThroughput;
    tableArn?: string;
    tableCreationDateTime: Date;
    tableId: string;
    tableName: string;
    tableSizeBytes?: number;
}
