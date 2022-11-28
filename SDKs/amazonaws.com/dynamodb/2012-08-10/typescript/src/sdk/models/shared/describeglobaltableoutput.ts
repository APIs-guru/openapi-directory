import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalTableDescription } from "./globaltabledescription";



export class DescribeGlobalTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableDescription" })
  globalTableDescription?: GlobalTableDescription;
}
