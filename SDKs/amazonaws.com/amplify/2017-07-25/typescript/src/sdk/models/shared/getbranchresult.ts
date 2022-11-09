import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Branch } from "./branch";


export class GetBranchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: Branch;
}
