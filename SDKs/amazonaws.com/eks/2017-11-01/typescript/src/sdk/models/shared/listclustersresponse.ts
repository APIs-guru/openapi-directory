import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters" })
  clusters?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
