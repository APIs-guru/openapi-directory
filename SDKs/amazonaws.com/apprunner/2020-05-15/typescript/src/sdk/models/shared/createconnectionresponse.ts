import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class CreateConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connection" })
  connection: Connection;
}
