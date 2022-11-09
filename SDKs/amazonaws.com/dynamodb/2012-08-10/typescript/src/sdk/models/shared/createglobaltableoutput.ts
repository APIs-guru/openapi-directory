import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlobalTableDescription } from "./globaltabledescription";


export class CreateGlobalTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableDescription" })
  globalTableDescription?: GlobalTableDescription;
}
