import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DiscoverPollEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance?: string;
}
