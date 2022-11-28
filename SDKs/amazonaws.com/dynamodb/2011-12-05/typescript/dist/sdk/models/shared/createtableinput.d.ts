import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughput } from "./provisionedthroughput";
export declare class CreateTableInput extends SpeakeasyBase {
    keySchema: KeySchema;
    provisionedThroughput: ProvisionedThroughput;
    tableName: string;
}
