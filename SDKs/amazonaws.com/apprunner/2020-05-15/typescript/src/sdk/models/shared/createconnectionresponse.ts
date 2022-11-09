import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


export class CreateConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connection" })
  connection: Connection;
}
