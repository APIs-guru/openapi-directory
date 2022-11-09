import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDeleteConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ConnectionNameList" })
  connectionNameList: string[];
}
