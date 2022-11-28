import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StepsPostStepRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStepInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoStep1?: shared.BuildSystemSharedDtoStepInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoStep2?: shared.BuildSystemSharedDtoStepInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class StepsPostStepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: StepsPostStepRequestsInput;
}


export class StepsPostStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stepsPostStep200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  stepsPostStep200TextJsonInt32Integer?: number;
}
