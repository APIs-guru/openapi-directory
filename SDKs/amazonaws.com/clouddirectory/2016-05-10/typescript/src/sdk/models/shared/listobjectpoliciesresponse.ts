import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListObjectPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedPolicyIds" })
  attachedPolicyIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
