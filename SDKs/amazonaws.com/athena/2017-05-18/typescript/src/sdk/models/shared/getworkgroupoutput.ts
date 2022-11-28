import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkGroup } from "./workgroup";



export class GetWorkGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: WorkGroup;
}
