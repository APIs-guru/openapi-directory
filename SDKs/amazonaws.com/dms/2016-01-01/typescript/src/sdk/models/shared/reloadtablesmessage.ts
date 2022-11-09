import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReloadOptionValueEnum } from "./reloadoptionvalueenum";
import { TableToReload } from "./tabletoreload";


export class ReloadTablesMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReloadOption" })
  reloadOption?: ReloadOptionValueEnum;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @Metadata({ data: "json, name=TablesToReload", elemType: shared.TableToReload })
  tablesToReload: TableToReload[];
}
