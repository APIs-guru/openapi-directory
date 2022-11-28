import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalTableDescription } from "./globaltabledescription";



export class CreateGlobalTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableDescription" })
  globalTableDescription?: GlobalTableDescription;
}
