import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


export class DeleteConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connection" })
  connection?: Connection;
}
