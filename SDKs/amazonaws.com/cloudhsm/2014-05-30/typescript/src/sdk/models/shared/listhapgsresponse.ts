import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListHapgsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgList" })
  hapgList: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
