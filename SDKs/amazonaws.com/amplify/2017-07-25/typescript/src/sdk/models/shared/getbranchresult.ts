import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";



export class GetBranchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: Branch;
}
