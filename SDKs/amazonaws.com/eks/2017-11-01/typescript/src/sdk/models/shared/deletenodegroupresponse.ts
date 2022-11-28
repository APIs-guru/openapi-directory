import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Nodegroup } from "./nodegroup";



export class DeleteNodegroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodegroup" })
  nodegroup?: Nodegroup;
}
