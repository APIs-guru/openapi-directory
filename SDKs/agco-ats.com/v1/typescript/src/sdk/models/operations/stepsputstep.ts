import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StepsPutStepPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepID" })
  stepId: number;
}


export class StepsPutStepRequestsInput extends SpeakeasyBase {
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


export class StepsPutStepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StepsPutStepPathParams;

  @SpeakeasyMetadata()
  request: StepsPutStepRequestsInput;
}


export class StepsPutStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
