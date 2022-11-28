import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class DeleteConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connection" })
  connection?: Connection;
}
