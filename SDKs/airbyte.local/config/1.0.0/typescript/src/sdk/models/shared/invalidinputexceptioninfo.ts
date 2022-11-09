import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvalidInputProperty } from "./invalidinputproperty";


export class InvalidInputExceptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=exceptionClassName" })
  exceptionClassName?: string;

  @Metadata({ data: "json, name=exceptionStack" })
  exceptionStack?: string[];

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=validationErrors", elemType: shared.InvalidInputProperty })
  validationErrors: InvalidInputProperty[];
}
