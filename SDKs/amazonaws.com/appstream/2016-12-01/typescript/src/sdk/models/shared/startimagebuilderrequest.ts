import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartImageBuilderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
