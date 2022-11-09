import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListNodegroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=nodegroups" })
  nodegroups?: string[];
}
