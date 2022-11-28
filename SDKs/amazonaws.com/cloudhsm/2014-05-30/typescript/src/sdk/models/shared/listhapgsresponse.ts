import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHapgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgList" })
  hapgList: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
