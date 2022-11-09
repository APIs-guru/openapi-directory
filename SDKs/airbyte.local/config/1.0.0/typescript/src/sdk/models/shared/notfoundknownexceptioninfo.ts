import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotFoundKnownExceptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=exceptionClassName" })
  exceptionClassName?: string;

  @Metadata({ data: "json, name=exceptionStack" })
  exceptionStack?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=rootCauseExceptionClassName" })
  rootCauseExceptionClassName?: string;

  @Metadata({ data: "json, name=rootCauseExceptionStack" })
  rootCauseExceptionStack?: string[];
}
