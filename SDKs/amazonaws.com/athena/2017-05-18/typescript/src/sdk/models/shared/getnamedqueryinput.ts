import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNamedQueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueryId" })
  namedQueryId: string;
}
