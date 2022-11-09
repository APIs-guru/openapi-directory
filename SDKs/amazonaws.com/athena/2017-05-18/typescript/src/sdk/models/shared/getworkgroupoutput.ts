import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkGroup } from "./workgroup";


export class GetWorkGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: WorkGroup;
}
