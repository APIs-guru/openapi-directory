import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsGetCurrentAgentAsyncResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
