import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotFoundKnownExceptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exceptionClassName" })
  exceptionClassName?: string;

  @SpeakeasyMetadata({ data: "json, name=exceptionStack" })
  exceptionStack?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=rootCauseExceptionClassName" })
  rootCauseExceptionClassName?: string;

  @SpeakeasyMetadata({ data: "json, name=rootCauseExceptionStack" })
  rootCauseExceptionStack?: string[];
}
