import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidatePolicyFinding } from "./validatepolicyfinding";



export class ValidatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: ValidatePolicyFinding })
  findings: ValidatePolicyFinding[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
