import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartImageBuilderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
