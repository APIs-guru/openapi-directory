import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



export class GetConnectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connection" })
  connection?: Connection;
}
