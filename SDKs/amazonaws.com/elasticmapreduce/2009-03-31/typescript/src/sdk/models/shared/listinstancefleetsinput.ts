import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInstanceFleetsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
