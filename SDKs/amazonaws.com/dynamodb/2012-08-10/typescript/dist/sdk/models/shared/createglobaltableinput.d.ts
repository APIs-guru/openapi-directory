import { SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";
export declare class CreateGlobalTableInput extends SpeakeasyBase {
    globalTableName: string;
    replicationGroup: Replica[];
}
