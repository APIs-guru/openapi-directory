import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyToPath } from "./policytopath";



export class LookupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyToPathList", elemType: PolicyToPath })
  policyToPathList?: PolicyToPath[];
}
