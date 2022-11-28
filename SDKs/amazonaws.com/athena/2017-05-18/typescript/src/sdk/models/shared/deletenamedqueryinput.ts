import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNamedQueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueryId" })
  namedQueryId: string;
}
