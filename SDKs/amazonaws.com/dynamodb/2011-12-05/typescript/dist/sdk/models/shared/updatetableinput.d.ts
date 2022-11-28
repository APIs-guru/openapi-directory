import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";
export declare class UpdateTableInput extends SpeakeasyBase {
    provisionedThroughput: ProvisionedThroughput;
    tableName: string;
}
