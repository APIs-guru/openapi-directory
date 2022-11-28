import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetNamedQueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NamedQueryIds" })
  namedQueryIds: string[];
}
