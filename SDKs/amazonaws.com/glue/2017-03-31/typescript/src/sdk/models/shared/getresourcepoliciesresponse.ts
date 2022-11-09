import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GluePolicy } from "./gluepolicy";


export class GetResourcePoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GetResourcePoliciesResponseList", elemType: shared.GluePolicy })
  getResourcePoliciesResponseList?: GluePolicy[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
