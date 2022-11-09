import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidatePolicyFinding } from "./validatepolicyfinding";


export class ValidatePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.ValidatePolicyFinding })
  findings: ValidatePolicyFinding[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
