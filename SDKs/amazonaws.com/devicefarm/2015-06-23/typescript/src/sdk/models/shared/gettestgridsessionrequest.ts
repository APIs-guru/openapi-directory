import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTestGridSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @Metadata({ data: "json, name=sessionArn" })
  sessionArn?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
