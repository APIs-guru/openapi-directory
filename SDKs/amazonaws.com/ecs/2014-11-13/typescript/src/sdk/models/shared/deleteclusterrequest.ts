import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;
}
