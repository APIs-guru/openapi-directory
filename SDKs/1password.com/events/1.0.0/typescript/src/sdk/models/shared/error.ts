import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: ErrorError;
}
