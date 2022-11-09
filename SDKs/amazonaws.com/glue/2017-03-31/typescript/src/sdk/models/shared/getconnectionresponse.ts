import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


export class GetConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connection" })
  connection?: Connection;
}
