import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsGetCurrentAgentActivityRunResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
