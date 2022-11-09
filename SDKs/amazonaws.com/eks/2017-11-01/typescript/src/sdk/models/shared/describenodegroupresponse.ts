import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Nodegroup } from "./nodegroup";


export class DescribeNodegroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodegroup" })
  nodegroup?: Nodegroup;
}
