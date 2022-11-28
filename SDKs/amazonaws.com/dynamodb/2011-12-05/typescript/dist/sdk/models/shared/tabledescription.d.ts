import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { TableStatusEnum } from "./tablestatusenum";
export declare class TableDescription extends SpeakeasyBase {
    creationDateTime?: Date;
    itemCount?: number;
    keySchema?: KeySchema;
    provisionedThroughput?: ProvisionedThroughputDescription;
    tableName?: string;
    tableSizeBytes?: number;
    tableStatus?: TableStatusEnum;
}
