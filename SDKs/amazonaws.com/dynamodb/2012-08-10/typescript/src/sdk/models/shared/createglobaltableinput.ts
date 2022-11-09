import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Replica } from "./replica";


export class CreateGlobalTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @Metadata({ data: "json, name=ReplicationGroup", elemType: shared.Replica })
  replicationGroup: Replica[];
}
