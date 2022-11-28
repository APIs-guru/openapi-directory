import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorError;
}
