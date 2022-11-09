import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReloadOptionValueEnum } from "./reloadoptionvalueenum";
import { TableToReload } from "./tabletoreload";
export declare class ReloadTablesMessage extends SpeakeasyBase {
    reloadOption?: ReloadOptionValueEnum;
    replicationTaskArn: string;
    tablesToReload: TableToReload[];
}
