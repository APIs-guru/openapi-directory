import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GluePolicy } from "./gluepolicy";



export class GetResourcePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GetResourcePoliciesResponseList", elemType: GluePolicy })
  getResourcePoliciesResponseList?: GluePolicy[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
