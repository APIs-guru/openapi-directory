import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters" })
  clusters?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
