import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListObjectPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedPolicyIds" })
  attachedPolicyIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
