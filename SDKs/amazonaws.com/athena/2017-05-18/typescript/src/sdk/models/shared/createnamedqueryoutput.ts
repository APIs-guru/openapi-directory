import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNamedQueryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;
}
