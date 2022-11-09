import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=rowOffset" })
  rowOffset?: number;
}
