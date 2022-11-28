import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivitiesPostActivityRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivity1?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivity2?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ActivitiesPostActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ActivitiesPostActivityRequestsInput;
}


export class ActivitiesPostActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  activitiesPostActivity200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  activitiesPostActivity200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
