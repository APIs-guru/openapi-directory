import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReloadOptionValueEnum } from "./reloadoptionvalueenum";
import { TableToReload } from "./tabletoreload";



export class ReloadTablesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReloadOption" })
  reloadOption?: ReloadOptionValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=TablesToReload", elemType: TableToReload })
  tablesToReload: TableToReload[];
}
