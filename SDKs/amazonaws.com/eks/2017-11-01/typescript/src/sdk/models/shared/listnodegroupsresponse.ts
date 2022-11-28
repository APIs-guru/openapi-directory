import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListNodegroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nodegroups" })
  nodegroups?: string[];
}
