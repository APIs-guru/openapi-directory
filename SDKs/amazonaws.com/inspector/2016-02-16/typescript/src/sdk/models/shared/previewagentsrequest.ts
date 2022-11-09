import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewAgentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=previewAgentsArn" })
  previewAgentsArn: string;
}
