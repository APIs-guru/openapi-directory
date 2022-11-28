import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=rowOffset" })
  rowOffset?: number;
}
