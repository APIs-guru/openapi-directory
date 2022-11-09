import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyToPath } from "./policytopath";


export class LookupPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyToPathList", elemType: shared.PolicyToPath })
  policyToPathList?: PolicyToPath[];
}
