import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
