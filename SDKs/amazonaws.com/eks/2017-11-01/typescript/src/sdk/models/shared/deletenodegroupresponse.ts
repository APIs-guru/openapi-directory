import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Nodegroup } from "./nodegroup";


export class DeleteNodegroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodegroup" })
  nodegroup?: Nodegroup;
}
